// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const OLD_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJleCI6ImpucGF6cm5nb3BodHl1dnhyb3l4IiwiaWF0IjoxNzg5NTcwNzA1LCJleHAiOjIxMDUxNDY3MDB9.j6d8SU5J5kZhMd0NcMeFOo0ebPOz-Lc4a710i_9B8Y";
const CURRENT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJleCI6ImpucGF6cm5nb3BodHl1dnhyb3l4IiwiaWF0IjoxNzg5NTcwNzA1LCJleHAiOjIxMDUxNDY3MDB9.j6d8SU5J5kZhMd0NcMeFOo0ebPOz-Lc4a710i_9B8Y";

export default defineConfig({
  vite: {
    plugins: [
      {
        name: "preserve-gate-and-route-pix",
        transform(code: string, id: string) {
          if (!/\.(tsx?|jsx?)$/.test(id)) return null;
          let next = code;
          next = next.replaceAll(OLD_SUPABASE_ANON_KEY, CURRENT_SUPABASE_ANON_KEY);
          // PIX: return to the previously working SyncPay function.
          next = next.replaceAll("syncpay-create-pix-v2", "syncpay-create-pix");
          // Preserve the already-correct button-only countdown exactly as-is.
          next = next.replace('{countdown!==null&&<div className="mx-auto mt-5 w-fit text-center"><div className="text-2xl font-extrabold text-white drop-shadow-md">Aguarde...</div><div className="mx-auto mt-2 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/90 bg-black/30 text-6xl font-black text-white shadow-2xl ring-4 ring-white/20">{countdown}</div></div>}', '');
          next = next.replace('window.clearInterval(timer);onContinue(code);return', 'window.clearInterval(timer);setCountdown(null);onContinue(code);return');
          // Preserve the gate behavior already in place: do not let an old stored country bypass the gate during testing.
          next = next.replace('useState<string|null>(()=>{try{return typeof window!=="undefined"?localStorage.getItem("profile-country"):null}catch{return null}})', 'useState<string|null>(null)');
          next = next.replace('try{localStorage.setItem("profile-country",code)}catch{};setCountry(code)', 'setCountry(code)');

          // Brazilian PIX: after payment confirmation, show the plan with a visible Paid status
          // and send the user to the existing Telegram bot with the exact payment identifier.
          const oldPaid = 'step==="paid"&&<div className="py-8 text-center"><CheckCircle2 size={58} className="mx-auto text-green-600"/><h4 className="mt-4 text-2xl font-bold">Pagamento confirmado</h4><p className="mt-2 text-sm text-[#68707b]">Seu pagamento foi confirmado. O acesso será liberado na sequência.</p><button onClick={onClose} className="mt-6 h-12 w-full rounded-xl bg-[#ff6a2d] font-bold text-white">Continuar</button></div>';
          const newPaid = 'step==="paid"&&<div className="py-8 text-center"><CheckCircle2 size={58} className="mx-auto text-green-600"/><div className="mt-4 flex items-center justify-center gap-2 text-2xl font-bold"><span>{isGift?"Mimo":plan}</span>{!isGift&&<span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">Pago ✓</span>}</div><h4 className="mt-3 text-2xl font-bold">Pagamento confirmado</h4><p className="mt-2 text-sm text-[#68707b]">{isGift?"Seu mimo foi confirmado.":"Seu pagamento foi confirmado. Agora você pode receber seu acesso pelo Telegram."}</p>{isGift?<button onClick={onClose} className="mt-6 h-12 w-full rounded-xl bg-[#ff6a2d] font-bold text-white">Continuar</button>:<button onClick={()=>{window.location.href=`${telegramLink}?start=${encodeURIComponent(identifier)}`}} className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#229ed9] font-bold text-white"><Send size={18}/>Receber acesso pelo Telegram</button>}</div>';
          next = next.replace(oldPaid, newPaid);

          return next === code ? null : { code: next, map: null };
        },
      },
    ],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
