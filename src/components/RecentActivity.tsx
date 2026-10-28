import { useEffect, useMemo, useState } from "react";

const SUPABASE_URL = "https://jrpazrngophtyuvxroyx.supabase.co";

type Activity = {
  amount: number;
  paid_at: string;
  name?: string | null;
  item?: string | null;
  description?: string | null;
};

function offer(amount: number): [string, string] {
  const map: Record<string, [string, string]> = {
    "9.9": ["Pack de 15 fotos", "📸"],
    "17.9": ["Pack de 8 vídeos", "🎥"],
    "19.9": ["Pack de 40 fotos", "📸"],
    "21.9": ["VIP de 1 mês", "❤️"],
    "24.9": ["Pack de 12 vídeos", "🎥"],
    "27.9": ["Videochamada", "📱"],
    "49.9": ["VIP de 3 meses", "❤️"],
  };
  return map[String(Number(amount.toFixed(2)))] || ["acesso exclusivo", "✨"];
}

function formatElapsed(dateValue: string) {
  const timestamp = new Date(dateValue).getTime();
  if (!Number.isFinite(timestamp)) return "";
  const minutes = Math.max(0, Math.floor((Date.now() - timestamp) / 60000));
  if (minutes === 0) return "agora";
  if (minutes === 1) return "há 1 min";
  if (minutes < 60) return `há ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours === 1) return "há 1 hora";
  if (hours < 2) return "há 1 hora";
  return "há 2 horas";
}

export function RecentActivity() {
  const [items, setItems] = useState<Activity[]>([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const orderedItems = useMemo(
    () => [...items].filter((item) => Number.isFinite(Number(item.amount)) && item.paid_at).sort(
      (a, b) => new Date(b.paid_at).getTime() - new Date(a.paid_at).getTime()
    ),
    [items]
  );

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(`${SUPABASE_URL}/functions/v1/recent-activity?t=${Date.now()}`, { cache: "no-store" });
        if (!response.ok) return;
        const data = await response.json();
        if (active && Array.isArray(data.activities)) {
          setItems(data.activities);
          setIndex(0);
          setVisible(data.activities.length > 0);
        }
      } catch {
        // Activity notifications are optional; never interrupt the page.
      }
    };
    void load();
    const refresh = window.setInterval(() => void load(), 60000);
    return () => {
      active = false;
      window.clearInterval(refresh);
    };
  }, []);

  useEffect(() => {
    if (orderedItems.length < 2) return;
    let hideTimer: number | undefined;
    const showNotification = () => {
      setVisible(true);
      if (hideTimer) window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setVisible(false), 4000);
    };
    showNotification();
    const cycle = window.setInterval(() => {
      setVisible(false);
      hideTimer = window.setTimeout(() => {
        setIndex((current) => (current + 1) % orderedItems.length);
        showNotification();
      }, 250);
    }, 12000);
    return () => {
      window.clearInterval(cycle);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, [orderedItems.length]);

  if (!orderedItems.length) return null;

  const item = orderedItems[index % orderedItems.length];
  const [defaultItem, emoji] = offer(Number(item.amount));
  const product = item.item?.trim() || item.description?.trim() || defaultItem;
  const buyerName = item.name?.trim();
  const amount = Number(item.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const when = formatElapsed(item.paid_at);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed right-2 top-20 z-[100] w-[min(190px,calc(100vw-32px))] transition-all duration-300 sm:right-4 sm:top-20 ${visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
    >
      <div className="rounded-xl border border-white/40 bg-white/65 px-2 py-1.5 shadow-[0_4px_16px_rgba(15,23,42,.08)] backdrop-blur-xl">
        <div className="flex items-start gap-2">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ff6a2d]/10 bg-[#fff2eb] text-[9px]">{emoji}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[7px] font-bold uppercase tracking-[.08em] text-[#858b95]">Atividade recente</span>
              <span className="shrink-0 text-[7px] text-[#858b95]">{when}</span>
            </div>
            <p className="mt-0.5 text-[9px] leading-3.5 text-[#343942]">
              {buyerName ? <><strong className="font-semibold text-[#20242b]">{buyerName}</strong> garantiu </> : <>Uma compra confirmou </>}
              <span className="font-medium">{product}</span>
            </p>
            <div className="mt-0.5 flex items-center gap-1">
              <span className="text-[8px] font-bold text-[#ff6a2d]">{amount}</span>
              <span className="text-[#d2d4d8]">•</span>
              <span className="text-[7px] font-medium text-[#858b95]">Pagamento confirmado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
