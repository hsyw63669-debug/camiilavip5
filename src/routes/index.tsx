import { createFileRoute } from "@tanstack/react-router";
import { RecentActivity } from "../components/RecentActivity";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import { Bookmark, ChevronDown, ChevronUp, Gift, Heart, Image as ImageIcon, Lock, MessageCircle, PlaySquare, Send, X, ArrowLeft, Globe, Copy, CheckCircle2, Loader2, ChevronRight, Search, Smartphone, Star, Compass } from "lucide-react";

export const Route = createFileRoute("/")({ component: ProfilePage });
type Tab = "Todos" | "Fotos" | "Vídeos" | "Pagos";
const tabs: Tab[] = ["Todos", "Fotos", "Vídeos", "Pagos"];
const profileImage = "/valeria-perfil.png";
const bannerImage = "/valeria-capa.png";
const lockedCompositeImage="https://d2ol7oe51mr4n9.cloudfront.net/user_3621XdTB4EGcH3ltocWdMfyuXoS/5e2c3a2e-6c7c-4567-ba63-0946e65094df.jpg";
const vipPreviewVideos=["/tia-camila-card-1.mp4","/tia-camila-card-2.mp4","/tia-camila-card-3.mp4","/tia-camila-card-4.mp4"];
const vipAccessUrl="https://t.me/vipacessotele_bot";
const bannerVideo = bannerImage;
const telegramLink = "https://t.me/vipacessotele_bot";
const tax9_90TelegramBot = "https://t.me/vipacessotele_bot";
const telegramBotLink = "https://t.me/vipacessotele_bot";
const foreignTelegramBotLink = telegramBotLink;
const donaMariaTelegramBot = "https://t.me/vipacessotele_bot";
const donaMariaGroup = "https://t.me/vipacessotele_bot";
const tsunakaVipGroup = "https://t.me/vipacessotele_bot";
const packTelegramLinks: Record<string,string> = {
 "5 vídeos":"https://t.me/vipacessotele_bot",
 "8 vídeos":"https://t.me/vipacessotele_bot",
 "12 vídeos":"https://t.me/vipacessotele_bot",
 "15 fotos":"https://t.me/vipacessotele_bot",
 "25 fotos":"https://t.me/vipacessotele_bot",
 "40 fotos":"https://t.me/vipacessotele_bot",
 "20 fotos + 4 vídeos":"https://t.me/vipacessotele_bot",
 "30 fotos + 6 vídeos":"https://t.me/vipacessotele_bot",
 "45 fotos + 10 vídeos":"https://t.me/vipacessotele_bot"
};
const brendaWhatsapp = "11958052230";
const SUPABASE_URL = "https://jrpazrngophtyuvxroyx.supabase.co";
const META_PIXEL_ID = "1619081253020924";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJleCI6ImpycGF6b25nb3BodHl1dnhyb3l4IiwiaWF0IjoxNzg5NTcwNzA1LCJleHAiOjIxMDUxNDY3MDB9.j6d8SU5J5kZhMd0NcMeFOo0ebPOz-Lc4a710i_9B8Y";
const countries = [["BR", "🇧🇷", "Brasil"], ["US", "🇺🇸", "Estados Unidos"], ["CA", "🇨🇦", "Canadá"], ["GB", "🇬🇧", "Reino Unido"], ["AU", "🇦🇺", "Austrália"], ["ES", "🇪🇸", "Espanha"], ["MX", "🇲🇽", "México"], ["AR", "🇦🇷", "Argentina"], ["CL", "🇨🇱", "Chile"], ["FR", "🇫🇷", "França"], ["DE", "🇩🇪", "Alemanha"], ["IT", "🇮🇹", "Itália"], ["PT", "🇵🇹", "Portugal"]] as const;
type Lang = { chooseCountry:string; chooseCountryText:string; selectCountry:string; continue:string; subscriptions:string; promotions:string; gift:string; giftText:string; posts:string; media:string; tabs:Record<Tab,string>; writeComment:string; subscription:string; choosePlan:string; back:string; plan1:string; plan3:string; plan6:string; close:string; lockMessage:string; telegramTitle:string; telegramText:string; telegramButton:string; telegramBack:string; approximate:string; bioIntro:string; bioMiddlePrefix:string; bioMiddleStrong:string; bioMiddleSuffix:string; bioMore:string; bioFinal:string; accessAfterConfirmation:string; choose:string; mostChosen:string };
const translations: Record<string,Lang> = {
 BR:{chooseCountry:"Escolha seu país",chooseCountryText:"Selecione seu país para continuar e acessar o perfil.",selectCountry:"Selecione seu país",continue:"Continuar",subscriptions:"Assinaturas",promotions:"Promoções",gift:"Mimos",giftText:"De um mimo e receba seu presente exclusivo",posts:"Postagens",media:"Mídias",tabs:{Todos:"Todos",Fotos:"Fotos",Vídeos:"Vídeos",Pagos:"Pagos"},writeComment:"Escreva um comentário...",subscription:"Assinatura",choosePlan:"Escolha o plano para continuar.",back:"Voltar",plan1:"1 mês",plan3:"3 meses",plan6:"6 meses",close:"Fechar",lockMessage:"Conteúdo exclusivo para assinantes.",telegramTitle:"Continuar pelo Telegram",telegramText:"Para pagamentos internacionais, você será direcionado ao Telegram. Lá, nosso bot estará em seu idioma, você poderá escolher o plano e concluir o pagamento com segurança.",telegramButton:"Continuar no Telegram",telegramBack:"Voltar",approximate:"Os valores exibidos seguem o mesmo número do plano no Brasil, apenas na moeda local. O valor final será mostrado pela MadBot.",bioIntro:"Oieee meu neném,tava te esperando pra gente gozar juntinhos,deixe essas novinhas e vem gozar gostoso com uma pessoa mais experiente 😏",bioMiddlePrefix:"",bioMiddleStrong:"",bioMiddleSuffix:"",bioMore:"",bioFinal:"",accessAfterConfirmation:"Acesso completo após a confirmação",choose:"Escolher",mostChosen:"🔥 MAIS ESCOLHIDO"},
 EN:{chooseCountry:"Choose your country",chooseCountryText:"Select your country to continue and access the profile.",selectCountry:"Select your country",continue:"Continue",subscriptions:"Subscriptions",promotions:"Promotions",gift:"Gifts",giftText:"Send a gift and receive your exclusive present",posts:"Posts",media:"Media",tabs:{Todos:"All",Fotos:"Photos",Vídeos:"Videos",Pagos:"Paid"},writeComment:"Write a comment...",subscription:"Subscription",choosePlan:"Choose a plan to continue.",back:"Back",plan1:"1 month",plan3:"3 months",plan6:"6 months",close:"Close",lockMessage:"Exclusive content for subscribers.",telegramTitle:"Continue on Telegram",telegramText:"For international payments, you will be redirected to Telegram. Our bot will be in your language, where you can choose your plan and complete the payment securely.",telegramButton:"Continue on Telegram",telegramBack:"Back",approximate:"The displayed amounts keep the same number as the Brazil plan, only using the local currency. The final amount will be shown by MadBot.",bioIntro:"Love... if you made it this far, it's because you want to get closer to me 😈",bioMiddlePrefix:"",bioMiddleStrong:"",bioMiddleSuffix:"",bioMore:"",bioFinal:"",accessAfterConfirmation:"Full access after payment confirmation",choose:"Choose",mostChosen:"🔥 MOST CHOSEN"},
 ES:{chooseCountry:"Elige tu país",chooseCountryText:"Selecciona tu país para continuar y acceder al perfil.",selectCountry:"Selecciona tu país",continue:"Continuar",subscriptions:"Suscripciones",promotions:"Promociones",gift:"Regalos",giftText:"Haz un regalo y recibe tu regalo exclusivo",posts:"Publicaciones",media:"Contenido",tabs:{Todos:"Todo",Fotos:"Fotos",Vídeos:"Vídeos",Pagos:"Pagado"},writeComment:"Escribe un comentario...",subscription:"Suscripción",choosePlan:"Elige un plan para continuar.",back:"Volver",plan1:"1 mes",plan3:"3 meses",plan6:"6 meses",close:"Cerrar",lockMessage:"Contenido exclusivo para suscriptores.",telegramTitle:"Continuar por Telegram",telegramText:"Para pagos internacionales, serás dirigido a Telegram. Nuestro bot estará en tu idioma, donde podrás elegir el plan y completar el pago de forma segura.",telegramButton:"Continuar por Telegram",telegramBack:"Volver",approximate:"Los valores mantienen el mismo número del plan de Brasil, solo en la moneda local. El importe final aparecerá en MadBot.",bioIntro:"Amor... si llegaste hasta aquí, es porque quieres estar más cerca de mí 😈",bioMiddlePrefix:"",bioMiddleStrong:"",bioMiddleSuffix:"",bioMore:"",bioFinal:"",accessAfterConfirmation:"Acceso completo tras la confirmación",choose:"Elegir",mostChosen:"🔥 MÁS ELEGIDO"},
 FR:{chooseCountry:"Choisissez votre pays",chooseCountryText:"Sélectionnez votre pays pour continuer et accéder au profil.",selectCountry:"Sélectionnez votre pays",continue:"Continuer",subscriptions:"Abonnements",promotions:"Promotions",gift:"Cadeaux",giftText:"Offrez un cadeau et recevez votre cadeau exclusif",posts:"Publications",media:"Médias",tabs:{Todos:"Tous",Fotos:"Photos",Vídeos:"Vidéos",Pagos:"Payants"},writeComment:"Écrivez un commentaire...",subscription:"Abonnement",choosePlan:"Choisissez un forfait pour continuer.",back:"Retour",plan1:"1 mois",plan3:"3 mois",plan6:"6 mois",close:"Fermer",lockMessage:"Contenu exclusif aux abonnés.",telegramTitle:"Continuer sur Telegram",telegramText:"Pour les paiements internationaux, vous serez redirigé vers Telegram. Notre bot sera dans votre langue pour choisir votre forfait et effectuer le paiement en toute sécurité.",telegramButton:"Continuer sur Telegram",telegramBack:"Retour",approximate:"Les montants gardent le même chiffre que le plan au Brésil, uniquement dans la monnaie locale. Le montant final sera affiché par MadBot.",bioIntro:"Amour... si tu es arrivé jusqu'ici, c'est parce que tu veux te rapprocher de moi 😈",bioMiddlePrefix:"",bioMiddleStrong:"",bioMiddleSuffix:"",bioMore:"",bioFinal:"",accessAfterConfirmation:"Accès complet après confirmation",choose:"Choisir",mostChosen:"🔥 LE PLUS CHOISI"},
 DE:{chooseCountry:"Wähle dein Land",chooseCountryText:"Wähle dein Land, um fortzufahren und das Profil aufzurufen.",selectCountry:"Land auswählen",continue:"Weiter",subscriptions:"Abonnements",promotions:"Angebote",gift:"Geschenke",giftText:"Schenke etwas und erhalte dein exklusives Geschenk",posts:"Beiträge",media:"Medien",tabs:{Todos:"Alle",Fotos:"Fotos",Vídeos:"Videos",Pagos:"Bezahlt"},writeComment:"Kommentar schreiben...",subscription:"Abonnement",choosePlan:"Wähle einen Plan, um fortzufahren.",back:"Zurück",plan1:"1 Monat",plan3:"3 Monate",plan6:"6 Monate",close:"Schließen",lockMessage:"Exklusive Inhalte für Abonnenten.",telegramTitle:"Auf Telegram fortfahren",telegramText:"Für internationale Zahlungen wirst du zu Telegram weitergeleitet. Unser Bot wird in deiner Sprache sein, damit du deinen Plan auswählen und sicher bezahlen kannst.",telegramButton:"Auf Telegram fortfahren",telegramBack:"Zurück",approximate:"Die Beträge behalten dieselbe Zahl wie der Plan in Brasilien, nur in der Landeswährung. Der endgültige Betrag wird von MadBot angezeigt.",bioIntro:"Love... wenn du bis hierher gekommen bist, willst du mir näher kommen 😈",bioMiddlePrefix:"",bioMiddleStrong:"",bioMiddleSuffix:"",bioMore:"",bioFinal:"",accessAfterConfirmation:"Voller Zugang nach Zahlungsbestätigung",choose:"Auswählen",mostChosen:"🔥 AM HÄUFIGSTEN GEWÄHLT"},
 IT:{chooseCountry:"Scegli il tuo paese",chooseCountryText:"Seleziona il tuo paese per continuare e accedere al profilo.",selectCountry:"Seleziona il tuo paese",continue:"Continua",subscriptions:"Abbonamenti",promotions:"Promozioni",gift:"Regali",giftText:"Fai un regalo e ricevi il tuo regalo esclusivo",posts:"Post",media:"Media",tabs:{Todos:"Tutti",Fotos:"Foto",Vídeos:"Video",Pagos:"A pagamento"},writeComment:"Scrivi un commento...",subscription:"Abbonamento",choosePlan:"Scegli un piano per continuare.",back:"Indietro",plan1:"1 mese",plan3:"3 mesi",plan6:"6 mesi",close:"Chiudi",lockMessage:"Contenuti esclusivi per gli abbonati.",telegramTitle:"Continua su Telegram",telegramText:"Per i pagamenti internazionali, sarai reindirizzato a Telegram. Il nostro bot sarà nella tua lingua, dove potrai scegliere il piano e completare il pagamento in sicurezza.",telegramButton:"Continua su Telegram",telegramBack:"Indietro",approximate:"Gli importi mantengono lo stesso numero del piano in Brasile, solo nella valuta locale. L'importo finale sarà mostrato da MadBot.",bioIntro:"Amore... se sei arrivato fin qui, è perché vuoi avvicinarti a me 😈",bioMiddlePrefix:"",bioMiddleStrong:"",bioMiddleSuffix:"",bioMore:"",bioFinal:"",accessAfterConfirmation:"Accesso completo dopo la conferma",choose:"Scegli",mostChosen:"🔥 PIÙ SCELTO"},
 PT:{chooseCountry:"Escolha o seu país",chooseCountryText:"Selecione o seu país para continuar e aceder ao perfil.",selectCountry:"Selecione o seu país",continue:"Continuar",subscriptions:"Subscrições",promotions:"Promoções",gift:"Presentes",giftText:"Ofereça um presente e receba o seu presente exclusivo",posts:"Publicações",media:"Multimédia",tabs:{Todos:"Todos",Fotos:"Fotos",Vídeos:"Vídeos",Pagos:"Pagos"},writeComment:"Escreva um comentário...",subscription:"Subscrição",choosePlan:"Escolha um plano para continuar.",back:"Voltar",plan1:"1 mês",plan3:"3 meses",plan6:"6 meses",close:"Fechar",lockMessage:"Conteúdo exclusivo para subscritores.",telegramTitle:"Continuar pelo Telegram",telegramText:"Para pagamentos internacionais, será direcionado para o Telegram. O nosso bot estará no seu idioma, onde poderá escolher o plano e concluir o pagamento com segurança.",telegramButton:"Continuar no Telegram",telegramBack:"Voltar",approximate:"Os valores mantêm o mesmo número do plano no Brasil, apenas na moeda local. O valor final será mostrado pela MadBot.",bioIntro:"Amor... se chegaste até aqui, é porque queres chegar mais perto de mim 😈",bioMiddlePrefix:"Aqui escolhes como queres conhecer-me: ",bioMiddleStrong:"planos, presentes especiais e packs exclusivos",bioMiddleSuffix:" preparados para ti. 👀🔥",bioMore:"Podes ficar mais tempo comigo ou simplesmente escolher aquele presente que despertou a tua curiosidade...",bioFinal:"Escolhe o teu e vem descobrir o que preparei para ti. 😈❤️‍🔥",accessAfterConfirmation:"Acesso completo após a confirmação",choose:"Escolher",mostChosen:"🔥 MAIS ESCOLHIDO"}
};
const langForCountry=(code:string)=>code==="BR"?"BR":code==="FR"?"FR":code==="DE"?"DE":code==="IT"?"IT":code==="PT"?"PT":(["ES","MX","AR","CL"].includes(code)?"ES":"EN");
const countryLabel=(code:string,lang:string)=>{try{return new Intl.DisplayNames([lang==="BR"?"pt-BR":lang.toLowerCase()],{type:"region"}).of(code)||countries.find(c=>c[0]===code)?.[2]||code}catch{return countries.find(c=>c[0]===code)?.[2]||code}};
const localizedProfileText:Record<string,string>={
 BR:"Oi, eu sou a Tia Camila. Bem-vindo ao meu cantinho ❤️",
 EN:"Hi, I'm Tia Camila. Welcome to my little corner ❤️",
 ES:"Hola, soy Tia Camila. Bienvenido a mi rinconcito ❤️",
 FR:"Salut, je suis Tia Camila. Bienvenue dans mon petit coin ❤️",
 DE:"Hi, ich bin Tia Camila. Willkommen in meiner kleinen Ecke ❤️",
 IT:"Ciao, sono Tia Camila. Benvenuto nel mio piccolo angolo ❤️",
 PT:"Olá, sou a Mika. Bem-vindo ao meu cantinho ❤️"
};
const localizedUiExtra:Record<string,Record<string,string>>={
 EN:{"Videochamada exclusiva":"Exclusive video call","Vídeo personalizado":"Personalized video","Adicione por mais":"Add for","R$":"R$","Valor inválido.":"Invalid amount.","Não foi possível copiar automaticamente. Selecione o código e copie manualmente.":"Could not copy automatically. Select the code and copy it manually."},
 ES:{"Videochamada exclusiva":"Videollamada exclusiva","Vídeo personalizado":"Vídeo personalizado","Adicione por mais":"Añadir por","R$":"R$","Valor inválido.":"Importe no válido.","Não foi possível copiar automaticamente. Selecione o código e copie manualmente.":"No se pudo copiar automáticamente. Selecciona el código y cópialo manualmente."},
 FR:{"Videochamada exclusiva":"Appel vidéo exclusif","Vídeo personalizado":"Vidéo personnalisée","Adicione por mais":"Ajouter pour","R$":"R$","Valor inválido.":"Montant invalide.","Não foi possível copiar automaticamente. Selecione o código e copie manualmente.":"Impossible de copier automatiquement. Sélectionnez le code et copiez-le manuellement."},
 DE:{"Videochamada exclusiva":"Exklusiver Videoanruf","Vídeo personalizado":"Personalisiertes Video","Adicione por mais":"Hinzufügen für","R$":"R$","Valor inválido.":"Ungültiger Betrag.","Não foi possível copiar automaticamente. Selecione o código e copie manualmente.":"Automatisches Kopieren nicht möglich. Wähle den Code aus und kopiere ihn manuell."},
 IT:{"Videochamada exclusiva":"Videochiamata esclusiva","Vídeo personalizado":"Video personalizzato","Adicione por mais":"Aggiungi per","R$":"R$","Valor inválido.":"Importo non valido.","Não foi possível copiar automaticamente. Selecione o código e copie manualmente.":"Impossibile copiare automaticamente. Seleziona il codice e copialo manualmente."},
 PT:{"Videochamada exclusiva":"Videochamada exclusiva","Vídeo personalizado":"Vídeo personalizado","Adicione por mais":"Adicionar por","R$":"R$","Valor inválido.":"Valor inválido.","Não foi possível copiar automaticamente. Selecione o código e copie manualmente.":"Não foi possível copiar automaticamente. Selecione o código e copie manualmente."},
 BR:{}
};

const localizeProfileDom=(country:string)=>{
 const lang=langForCountry(country||"BR");
 const dict={...(localizedUi[lang]||{}),...(localizedUiExtra[lang]||{})};
 const reverse:Record<string,string>={};
 Object.values(localizedUi).forEach(d=>Object.entries(d).forEach(([source,target])=>{if(target)reverse[target]=source;}));
 Object.values(localizedUiExtra).forEach(d=>Object.entries(d).forEach(([source,target])=>{if(target)reverse[target]=source;}));
 const normalize=(key:string)=>reverse[key]||key;
 const bioCandidates=[
  "Oi, eu sou a Tia Camila. Bem-vindo ao meu cantinho ❤️",
  "Oi, eu sou a Tia Camila",
  "Eu sou a Tia Camila",
  "Tia Camila"
 ];
 const localizedBio=localizedProfileText[lang]||localizedProfileText.EN;

 const replace=(node:Node)=>{
  if(node.nodeType===Node.TEXT_NODE){
   const raw=node.textContent||"", key=raw.trim(), source=normalize(key);
   if(bioCandidates.some(x=>key.includes(x))){
    const base=bioCandidates.find(x=>key.includes(x))||"";
    if(base && localizedBio) node.textContent=raw.replace(base,localizedBio);
   } else if(dict[source] && dict[source]!==key) node.textContent=raw.replace(key,dict[source]);
   else {
    const m=source.match(/^(\\d+) fotos$/i); if(m){const w=lang==="EN"?"photos":lang==="ES"?"fotos":lang==="FR"?"photos":lang==="DE"?"Fotos":lang==="IT"?"foto":lang==="PT"?"fotos":"fotos";const next=m[1]+" "+w;if(key!==next)node.textContent=raw.replace(key,next);}
    const v=source.match(/^(\\d+) vídeos$/i); if(v){const w=lang==="EN"?"videos":lang==="ES"?"vídeos":lang==="FR"?"vidéos":lang==="DE"?"Videos":lang==="IT"?"video":lang==="PT"?"vídeos":"vídeos";const next=v[1]+" "+w;if(key!==next)node.textContent=raw.replace(key,next);}
   }
  } else if(node.nodeType===Node.ELEMENT_NODE){
   const el=node as HTMLElement;
   if(el instanceof HTMLScriptElement||el instanceof HTMLStyleElement) return;
   if(el instanceof HTMLInputElement && el.placeholder){const source=normalize(el.placeholder);if(dict[source])el.placeholder=dict[source];}
   const aria=el.getAttribute("aria-label");if(aria){const source=normalize(aria);if(dict[source])el.setAttribute("aria-label",dict[source]);}
   node.childNodes.forEach(replace);
  }
 };
 replace(document.body);
 document.querySelectorAll("select option").forEach((o:any)=>{
  const code=o.value;
  if(code && countries.some((c:any)=>c[0]===code)){
   const c=countries.find((x:any)=>x[0]===code);
   const next=c[1]+" "+countryLabel(code,lang);
   if(o.textContent!==next)o.textContent=next;
  }
 });
};

// Valores atuais dos planos
const planAmounts: Record<string, number> = {
  "1 mês": 19.90,
  "3 meses": 49.90,
  "Vitalício": 97.90,
};
const orderBumps = {
 whatsapp: { label:"WhatsApp exclusivo", amount:12.9 },
 videoCall: { label:"Chamada de vídeo (apenas para os 3 primeiros)", amount:49.9 },
 customVideo: { label:"Vídeos personalizados (até 15 minutos)", amount:39.9 },
} as const;
type OrderBumpKey = keyof typeof orderBumps;
const upsellOffers = {
 "3 meses": { label:"3 meses", regular:49.9, discount:20, amount:39.92 },
 "6 meses": { label:"6 meses", regular:29.9, discount:25, amount:22.43 },
 "Vitalício": { label:"Vitalício", regular:97.90, discount:0, amount:97.90 },
} as const;
type Pack = { id:string; category:"Fotos"|"Vídeos"|"Fotos + Vídeos"; title:string; amount:number };
const packs: Pack[] = [
 {id:"fotos-15",category:"Fotos",title:"15 fotos",amount:9.9},
 {id:"fotos-25",category:"Fotos",title:"25 fotos",amount:14.9},
 {id:"fotos-40",category:"Fotos",title:"40 fotos",amount:19.9},
 {id:"videos-5",category:"Vídeos",title:"5 vídeos",amount:12.9},
 {id:"videos-8",category:"Vídeos",title:"8 vídeos",amount:17.9},
 {id:"videos-12",category:"Vídeos",title:"12 vídeos",amount:24.9},
 {id:"combo-20-4",category:"Fotos + Vídeos",title:"20 fotos + 4 vídeos",amount:19.9},
 {id:"combo-30-6",category:"Fotos + Vídeos",title:"30 fotos + 6 vídeos",amount:24.9},
 {id:"combo-45-10",category:"Fotos + Vídeos",title:"45 fotos + 10 vídeos",amount:34.9}
];
const foreignCurrency: Record<string,{code:string;symbol:string}> = { US:{code:"USD",symbol:"$"}, CA:{code:"CAD",symbol:"CA$"}, GB:{code:"GBP",symbol:"£"}, AU:{code:"AUD",symbol:"A$"}, ES:{code:"EUR",symbol:"€"}, FR:{code:"EUR",symbol:"€"}, DE:{code:"EUR",symbol:"€"}, IT:{code:"EUR",symbol:"€"}, PT:{code:"EUR",symbol:"€"}, MX:{code:"MXN",symbol:"MX$"}, AR:{code:"ARS",symbol:"AR$"}, CL:{code:"CLP",symbol:"CL$"} };
const foreignPrice=(country:string,plan:string)=>{const c=foreignCurrency[country];if(!c)return "";const value=planAmounts[plan]??0;return `${c.symbol} ${value.toLocaleString(c.code==="AR"?"es-AR":"en-US",{minimumFractionDigits:c.code==="CLP"?0:2,maximumFractionDigits:c.code==="CLP"?0:2})}`};
const ANALYTICS_URL = `${SUPABASE_URL}/functions/v1/track-analytics`;
const getLeadId = () => {
 try {
  const key = "analytics-lead-id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const created = `ld_${Date.now().toString(36)}_${crypto.randomUUID().slice(0,8)}`;
  localStorage.setItem(key, created);
  return created;
 } catch {
  return `ld_${Date.now().toString(36)}_anonymous`;
 }
};

const PAID_ACCESS_KEY = "privacy-paid-access-v1";
const PENDING_ACCESS_KEY = "privacy-pending-access-v1";
type PaidAccess = { identifier:string; amount:number; label:string; url:string; createdAt:number };
type PendingAccess = PaidAccess & { pixCode?: string; pixImage?: string };
type ResumePayment = PendingAccess & { pixCode:string; pixImage:string };
const getPaidAccess = ():PaidAccess|null => {
 try {
  const raw=localStorage.getItem(PAID_ACCESS_KEY);
  if(!raw)return null;
  const access=JSON.parse(raw) as PaidAccess;
  const normalized={...access,url:telegramLink};
  if(access.url!==telegramLink)localStorage.setItem(PAID_ACCESS_KEY,JSON.stringify(normalized));
  return normalized;
 } catch { return null; }
};
const savePaidAccess = (access:PaidAccess) => {
 try { localStorage.setItem(PAID_ACCESS_KEY,JSON.stringify(access)); } catch {}
};
const getPendingAccess = ():PendingAccess|null => {
 try { const raw=localStorage.getItem(PENDING_ACCESS_KEY); if(!raw)return null; const pending=JSON.parse(raw) as PendingAccess; return {...pending,url:telegramLink}; } catch { return null; }
};
const savePendingAccess = (access:PendingAccess) => {
 try { localStorage.setItem(PENDING_ACCESS_KEY,JSON.stringify(access)); } catch {}
};
const clearPendingAccess = () => {
 try { localStorage.removeItem(PENDING_ACCESS_KEY); } catch {}
};
const getStoredCountry = () => {
 try { return localStorage.getItem("profile-country-v2") || "BR"; } catch { return "BR"; }
};

const getAttribution = () => {
 try {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source") || params.get("src") || localStorage.getItem("analytics-source") || "direct";
  const campaign = params.get("utm_campaign") || params.get("campaign") || localStorage.getItem("analytics-campaign") || null;
  localStorage.setItem("analytics-source", source);
  if (campaign) localStorage.setItem("analytics-campaign", campaign);
  return { source, campaign };
 } catch {
  return { source: "direct", campaign: null };
 }
};
const getSessionId = () => {
 try {
  const key = "analytics-session-id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const created = `${Date.now()}-${crypto.randomUUID()}`;
  localStorage.setItem(key, created);
  return created;
 } catch {
  return `${Date.now()}-anonymous`;
 }
};
const trackEvent = (event_name:string, extra:Record<string,unknown>={}) => {
 try {
  const attribution = getAttribution();
  const body = JSON.stringify({ event_name, session_id:getSessionId(), lead_id:getLeadId(), source:attribution.source, campaign:attribution.campaign, ...extra });
  // Keep analytics reliable on mobile/iOS: use fetch with keepalive first.
  // Beacon with application/json can be blocked by CORS because it is not a CORS-safelisted content type.
  void fetch(ANALYTICS_URL,{method:"POST",headers:{"Content-Type":"application/json"},body,keepalive:true}).catch(()=>{
   try { navigator.sendBeacon?.(ANALYTICS_URL, new Blob([body], {type:"text/plain;charset=UTF-8"})); } catch {}
  });
 } catch {}
};

function ProfilePage() {
 useEffect(()=>{
  if(typeof window==="undefined")return;
  const w=window as typeof window & {fbq?:((...args:any[])=>void)&{queue?:any[];loaded?:boolean;version?:string}};
  if(w.fbq?.loaded)return;
  const fbq=((...args:any[])=>{
   if((fbq as any).callMethod)(fbq as any).callMethod(...args);
   else (fbq as any).queue.push(args);
  }) as ((...args:any[])=>void)&{queue:any[];loaded:boolean;version:string};
  fbq.queue=[];fbq.loaded=true;fbq.version="2.0";w.fbq=fbq;
  const script=document.createElement("script");script.async=true;script.src="https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  fbq("init",META_PIXEL_ID);fbq("track","PageView");
 },[]);

 const [tab,setTab]=useState<Tab>("Todos"); const [activePost,setActivePost]=useState(false); const [activeMedia,setActiveMedia]=useState(false); const [activeVipVideo,setActiveVipVideo]=useState<number|null>(null); const [promos,setPromos]=useState(true); const [paidAccess,setPaidAccess]=useState<PaidAccess|null>(null); const [pendingAccess,setPendingAccess]=useState<PendingAccess|null>(()=>getPendingAccess()); const [resumePayment,setResumePayment]=useState<ResumePayment|null>(null); const [modal,setModal]=useState<string|null>(null); const [paymentPlan,setPaymentPlan]=useState<string|null>(null); const [chatOpen,setChatOpen]=useState(false); const [packsOpen,setPacksOpen]=useState(false); const [packCategory,setPackCategory]=useState<Pack["category"]|null>(null); const [selectedPack,setSelectedPack]=useState<Pack|null>(null); const [giftCheckout,setGiftCheckout]=useState(false); const [telegramNotice,setTelegramNotice]=useState(false); const [liked,setLiked]=useState(false); const [saved,setSaved]=useState(false); const [whatsappAccess,setWhatsappAccess]=useState(false); const [comments,setComments]=useState(false); const [bioExpanded,setBioExpanded]=useState(false); const [comment,setComment]=useState(""); const [postedComment,setPostedComment]=useState(""); const [country,setCountry]=useState<string|null>(()=>{try{return localStorage.getItem("profile-country-v2")}catch{return null}});
 const enterProfile=(code:string)=>{if(!code)return;try{localStorage.setItem("profile-country-v2",code)}catch{};trackEvent("country_selected",{country:code,event_step:"country_auto"});setCountry(code)}; const t=translations[langForCountry(country||"BR")] as Lang;
 useEffect(()=>{  let active=true;  const detectVisitor=async()=>{   try{    const stored=localStorage.getItem("profile-country-v2");    if(stored){if(active)setCountry(stored);return;}    const res=await fetch(ANALYTICS_URL,{method:"GET",headers:{"Accept":"application/json"}});    if(!res.ok)return;    const data=await res.json();    const detected=String(data?.country||"").toUpperCase();    if(!detected)return;    try{localStorage.setItem("profile-country-v2",detected)}catch{}    if(active)setCountry(detected);    trackEvent("visitor_identified",{country:detected,language:data?.language||navigator.language||null,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||null,device:window.matchMedia("(max-width: 767px)").matches?"mobile":"desktop",event_step:"site"});   }catch{}  };  void detectVisitor();  return()=>{active=false}; },[]); useEffect(()=>{  trackEvent("page_view",{country:country||"unknown",event_step:"site"});
  let active=true;
  let accessCheckInProgress=false;
  const refreshPaidAccess=async()=>{
   if(accessCheckInProgress)return;
   const saved=getPaidAccess();
   if(!saved){if(active)setPaidAccess(null);return;}
   accessCheckInProgress=true;
   try{
    const res=await fetch("/api/pix/status?identifier="+encodeURIComponent(saved.identifier));
    if(!res.ok){if(active)setPaidAccess(null);return;}
    const data=await res.json();
    if(data?.payment?.status==="paid"){
     if(active)setPaidAccess({...saved,url:telegramLink});
    }else{
     try{localStorage.removeItem(PAID_ACCESS_KEY)}catch{}
     if(active)setPaidAccess(null);
    }
   }catch{if(active)setPaidAccess(null)}
   finally{accessCheckInProgress=false}
  };
  window.addEventListener("paid-access-updated",refreshPaidAccess);
  const recoverPendingPayment=async()=>{
   const pending=getPendingAccess();
   if(!pending)return;
   if(Date.now()-pending.createdAt>24*60*60*1000){clearPendingAccess();if(active)setPendingAccess(null);return;}
   try{
    const res=await fetch("/api/pix/status?identifier="+encodeURIComponent(pending.identifier));
    if(!res.ok)return;
    const data=await res.json();
    if(data?.payment?.status==="paid"){
     savePaidAccess({...pending,url:telegramLink});
     window.dispatchEvent(new Event("paid-access-updated"));
     clearPendingAccess();
     if(active)setPaidAccess(pending);
     if(active)setPendingAccess(null);
     trackEvent("payment_access_recovered",{amount:pending.amount,event_step:"return_access",identifier:pending.identifier});
    }
   }catch{}
  };
  refreshPaidAccess();
  const refreshPendingAccess=()=>setPendingAccess(getPendingAccess());
  refreshPendingAccess();
  const recoverFromAccessLink=async()=>{
   try{
    const params=new URLSearchParams(window.location.search);
    const accessId=params.get("access");
    if(!accessId)return;
    const res=await fetch("/api/pix/status?identifier="+encodeURIComponent(accessId));
    if(!res.ok)return;
    const data=await res.json();
    if(data?.payment?.status==="paid"){
     const dest=telegramLink;
     const recovered:PaidAccess={identifier:accessId,amount:Number(data.payment.amount||0),label:"Acesso recuperado",url:telegramLink,createdAt:Date.now()};
     savePaidAccess(recovered);
     window.dispatchEvent(new Event("paid-access-updated"));
     clearPendingAccess();
     if(active)setPaidAccess(recovered);
     if(active)setPendingAccess(null);
     trackEvent("payment_access_recovered",{amount:recovered.amount,event_step:"cross_device",identifier:accessId});
     window.history.replaceState({},document.title,window.location.pathname+window.location.hash);
    }
   }catch{}
  };
  void recoverFromAccessLink();
  void recoverPendingPayment();
  const recoveryTimer=window.setInterval(recoverPendingPayment,10000);
  window.addEventListener("pageshow",refreshPaidAccess);
  window.addEventListener("storage",refreshPaidAccess);
  window.addEventListener("storage",refreshPendingAccess);
  return()=>{
   active=false;
   window.clearInterval(recoveryTimer);
   window.removeEventListener("pageshow",refreshPaidAccess);
   window.removeEventListener("paid-access-updated",refreshPaidAccess);
   window.removeEventListener("storage",refreshPaidAccess);
   window.removeEventListener("storage",refreshPendingAccess);
  };
 },[]);
 const goForeignTelegram=()=>{trackEvent("foreign_telegram_notice_opened",{country:country||"unknown",event_step:"foreign_cta"});setTelegramNotice(true)};
 const goToCheckout=(plan:string)=>{trackEvent("subscription_clicked",{country:country||"BR",plan,event_step:"offer"});trackEvent("plan_selected",{country:country||"BR",plan,event_step:"offer"});if((country||"BR")!=="BR"){setModal(null);goForeignTelegram();return}setModal(null);setPaymentPlan(plan)};
 useEffect(()=>{
  const videos=Array.from(document.querySelectorAll<HTMLVideoElement>("video"));
  const startPlayback=()=>{
    videos.forEach(video=>{
      video.muted=true;
      video.defaultMuted=true;
      video.autoplay=true;
      video.playsInline=true;
      video.controls=false;
      void video.play().catch(()=>{});
    });
  };
  startPlayback();
  const onReady=()=>startPlayback();
  videos.forEach(video=>video.addEventListener("canplay",onReady));
  document.addEventListener("visibilitychange",startPlayback);
  window.addEventListener("pageshow",startPlayback);
  return()=>{
    videos.forEach(video=>video.removeEventListener("canplay",onReady));
    document.removeEventListener("visibilitychange",startPlayback);
    window.removeEventListener("pageshow",startPlayback);
  };
},[]);
 const goToGift=()=>{trackEvent("gift_clicked",{country:country||"BR",event_step:"offer"});if((country||"BR")!=="BR"){goForeignTelegram();return}setModal(null);setGiftCheckout(true)};
 const publishComment=()=>{if(!comment.trim())return;trackEvent("comment_submitted",{country:country||"BR"});setPostedComment(comment.trim());setComment("")};
 const openMedia=()=>{trackEvent("media_clicked",{country:country||"BR",event_step:"profile"});setActivePost(false);setActiveMedia(true);setTab("Todos");setTimeout(()=>document.getElementById("conteudo")?.scrollIntoView({behavior:"smooth",block:"start"}),50)};
 return <div className="min-h-screen bg-[#f8f3f0] text-[#17191d]">
  <header className="sticky top-0 z-40 border-b border-[#e9e1dc] bg-[#f8f3f0]/95 backdrop-blur-md">
   <div className="mx-auto flex h-[62px] max-w-[430px] items-center justify-between px-4">
    <button type="button" aria-label="Início" onClick={()=>{setActivePost(false);window.scrollTo({top:0,behavior:"smooth"})}} className="text-[29px] font-black tracking-[-2px] text-[#17191d]">privacy<span className="text-[#e98b43]">.</span></button>
    <div className="flex items-center gap-4"><button type="button" aria-label="Pesquisar" onClick={()=>{setTab("Todos");document.getElementById("conteudo")?.scrollIntoView({behavior:"smooth"})}} className="flex h-10 w-10 items-center justify-center text-[#202631]"><Search size={27} strokeWidth={1.7}/></button><button type="button" aria-label="Perfil" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="h-10 w-10 overflow-hidden rounded-full border-[3px] border-white shadow-sm"><img src={profileImage} alt="Tia Camila" className="h-full w-full object-cover"/></button></div>
   </div>
   <div className="mx-auto flex h-[58px] max-w-[430px] items-center justify-between px-5">
    <button type="button" aria-label="Voltar" onClick={()=>{if(activePost)setActivePost(false);else if(activeMedia){setActiveMedia(false);window.scrollTo({top:0,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"})}} className="flex h-9 w-9 items-center justify-start text-[#333238]"><ArrowLeft size={25} strokeWidth={1.7}/></button>
    <span className="text-[18px] font-medium text-[#333238]">Tia Camila</span>
    <button type="button" aria-label="Mais opções" onClick={()=>setModal("Escolha seu plano")} className="flex h-9 w-9 items-center justify-end text-[24px] text-[#333238]">⋮</button>
   </div>
  </header>
  <main className="mx-auto min-h-screen max-w-[430px] bg-white pb-[100px] shadow-[0_0_30px_rgba(0,0,0,.025)]">
   {!activePost ? <>
    <section className="relative">
     <div className="relative h-[178px] overflow-hidden rounded-t-[25px] bg-[#e9e4e1]"><img src={bannerImage} alt="Capa de Tia Camila" className="h-full w-full object-cover" style={{objectPosition:"center 51%"}}/><div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"/></div>
     <div className="relative px-4 pb-5">
      <div className="-mt-[43px] flex items-end justify-between">
       <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border-[5px] border-white bg-white"><img src={profileImage} alt="Tia Camila" className="h-full w-full object-cover" style={{objectPosition:"center 35%"}}/></div>
       <div className="mb-1 flex items-center gap-3 text-[14px] text-[#303137]"><span className="flex items-center gap-1.5"><ImageIcon size={20} strokeWidth={1.6}/>342</span><span className="flex items-center gap-1.5"><PlaySquare size={20} strokeWidth={1.6}/>521</span><span className="flex items-center gap-1.5"><Lock size={19} strokeWidth={1.6}/>123</span><span className="flex items-center gap-1.5"><Heart size={20} strokeWidth={1.6}/>213K</span></div>
      </div>
      <div className="mt-5 flex items-center gap-1.5"><h1 className="text-[23px] font-bold tracking-[-.55px]">Tia Camila</h1><span className="flex h-[21px] w-[21px] items-center justify-center rounded-full border-2 border-[#4389d8] text-[13px] font-bold text-[#4389d8]">✓</span></div>
      <p className="mt-0.5 text-[15px] text-[#303137]">@tiacamila_69</p>
      <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.45] text-[#17191d]">{bioExpanded ? (t.bioIntro || "Oi, eu sou a Tia Camila. Bem-vindo ao meu cantinho ❤️") : (t.bioIntro || "Oi, eu sou a Tia Camila. Bem-vindo ao meu cantinho ❤️")}</p>
      <button type="button" onClick={()=>setBioExpanded(v=>!v)} className="mt-2 text-[14px] font-semibold text-[#df8749]">{bioExpanded?"Ler menos":"Ler mais"}</button>
      <div className="mt-6 flex items-center gap-3 text-[#303137]"><button type="button" aria-label="Instagram" onClick={()=>setChatOpen(true)} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f3f0]"><Globe size={23} strokeWidth={1.7}/></button><button type="button" aria-label="TikTok" onClick={()=>setChatOpen(true)} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f3f0]"><Send size={23} strokeWidth={1.7}/></button></div>
     </div>
    </section>
    {paidAccess&&<section className="mx-4 mb-3 rounded-2xl border border-green-200 bg-green-50 p-3"><strong className="text-sm text-green-800">Seu acesso está liberado</strong><button type="button" onClick={()=>{trackEvent("access_clicked",{amount:paidAccess.amount,event_step:"return_access",identifier:paidAccess.identifier});window.location.href=paidAccess.url}} className="mt-2 w-full rounded-xl bg-green-600 px-3 py-3 text-sm font-bold text-white">Acessar agora</button></section>}
    {!paidAccess&&pendingAccess&&<section className="mx-4 mb-3 rounded-2xl border border-[#ffdccd] bg-[#fff8f4] p-3"><strong className="text-sm">Você tem um PIX pendente</strong><button type="button" onClick={()=>{try{const code=String(pendingAccess.pixCode||"");if(!code)throw new Error();setResumePayment({...pendingAccess,pixCode:code,pixImage:String(pendingAccess.pixImage||"")});trackEvent("pending_payment_resumed",{amount:pendingAccess.amount,event_step:"recovery",identifier:pendingAccess.identifier})}catch{toast.error("Este PIX não está mais disponível. Gere um novo pagamento.")}}} className="mt-2 w-full rounded-xl bg-[#ff633d] px-3 py-3 text-sm font-bold text-white">Retomar pagamento</button></section>}
    {!paidAccess&&<section id="assinaturas" className="mx-0 mb-5 mt-1 rounded-[16px] bg-[#f8f5f2] p-[14px] text-[#10203a]">
      <div className="mb-[18px] flex items-center gap-2 text-[16px] font-semibold leading-5"><span className="text-[19px] text-[#ff8736]">✦</span><span>Oferta de assinatura</span></div>
      <div className="mb-[47px] flex items-center gap-2">
       <img src={profileImage} alt="" className="h-[28px] w-[28px] shrink-0 rounded-full object-cover"/>
       <div className="flex h-[35px] flex-1 items-center rounded-[10px] bg-white px-[10px] text-[14px] font-normal leading-5 text-[#182a46]">Apenas para os 5 primeiros 🔥</div>
      </div>
      <div className="relative">
       <span className="absolute -top-[15px] left-[20px] z-10 rounded-full bg-[#effbef] px-[12px] py-[4px] text-[12px] font-medium leading-[16px] text-[#3da95e]">Economize 75%</span>
       <button type="button" onClick={()=>goToCheckout("1 mês")} className="flex h-[46px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff9b45] to-[#f8a39b] px-4 text-center text-[15px] font-medium leading-5 text-black active:scale-[.99]">Assinar agora R$ 19,90</button>
       <div className="mt-[10px] pr-[12px] text-right text-[11px] font-normal leading-[14px] text-[#182a46]">Preço original <span className="line-through">R$ 60,00</span></div>
      </div>
    </section>}
    <section id="assinaturas-planos" className="px-0 pb-5">
     <h2 className="mb-[5px] flex items-center justify-between px-[10px] text-[15px] font-medium leading-5 text-black">Assinaturas <ChevronUp size={21} className="text-[#969696]"/></h2>
     <div className="space-y-[7px]">
      {([{name:"1 mês",price:"R$ 19,90"},{name:"3 meses",price:"R$ 49,90"},{name:"Vitalício",price:"R$ 97,90"}] as const).map(({name,price})=><button key={name} type="button" onClick={()=>goToCheckout(name)} className="flex h-[47px] w-full items-center justify-between gap-3 rounded-full bg-gradient-to-r from-[#ff9b45] to-[#f8a39b] px-[32px] text-left text-[15px] font-medium leading-5 text-black active:scale-[.99]"><span>{name}</span><span className="shrink-0">{price}</span></button>)}
     </div>
    </section>
    <section id="previas-vip" className="px-3 pb-5 pt-1">
     <div className="mb-3 flex items-center justify-between">
      <div><h2 className="text-[16px] font-bold text-[#22242a]">Prévias exclusivas</h2><p className="mt-0.5 text-[12px] text-[#777980]">Um gostinho do conteúdo VIP</p></div>
      <span className="flex items-center gap-1 rounded-full bg-[#fff0e7] px-3 py-1.5 text-[11px] font-semibold text-[#df8749]"><Lock size={13}/> VIP</span>
     </div>
     <div className="grid grid-cols-2 gap-3">
      {[1,2,3,4].map((item)=><button key={item} type="button" onClick={()=>{if(paidAccess){trackEvent("vip_content_clicked",{event_step:"play_vip_video",identifier:paidAccess.identifier,video:item});setActiveVipVideo(item)}else setModal("Escolha seu plano")}} aria-label={paidAccess?`Reproduzir vídeo VIP ${item}`:`Prévia VIP ${item}, conteúdo bloqueado`} className="group relative aspect-[.82] overflow-hidden rounded-2xl bg-[#e8ddd5] text-left shadow-sm">
       <video src={vipPreviewVideos[item-1]} aria-label={`Vídeo ${item} de Tia Camila`} className={`absolute inset-0 h-full w-full object-cover ${paidAccess?"":"blur-[5px]"}`} autoPlay={!paidAccess} muted={!paidAccess} loop playsInline preload="metadata" />
       {!paidAccess && <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/30 via-black/35 to-black/45 text-center text-white">
        <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/25 shadow-lg backdrop-blur-[2px]">
         <Lock size={27} strokeWidth={1.9} className="drop-shadow-md" />
        </span>
        <span className="text-[14px] font-extrabold leading-5 drop-shadow-md">Conteúdo VIP</span>
        <span className="mt-1 rounded-full bg-black/35 px-3 py-1 text-[11px] font-semibold leading-4 drop-shadow-md">Toque para desbloquear</span>
       </div>}
      </button>)}
     </div>
    </section>
    <section className="border-t border-[#eee7e3]">
     <div className="grid grid-cols-2 border-b border-[#eee7e3]">
      <button type="button" onClick={()=>setTab("Todos")} className={`flex h-[58px] items-center justify-center gap-2 text-[14px] font-semibold ${tab==="Todos"?"border-b-[3px] border-[#df8749] text-[#df8749]":"text-[#777980]"}`}><Smartphone size={20}/>342 Postagens</button>
      <button type="button" onClick={openMedia} className={`flex h-[58px] items-center justify-center gap-2 text-[14px] font-semibold ${activeMedia?"border-b-[3px] border-[#df8749] text-[#df8749]":"text-[#303137]"}`}><PlaySquare size={20}/>571 Mídias</button>
     </div>
      {activeMedia ? <div id="conteudo" className="bg-[#f8f3f0]">
       <div className="grid grid-cols-4 border-b border-[#e9e1dc] bg-white">{(["Todos","Fotos","Vídeos","Pagos"] as Tab[]).map(item=><button key={item} type="button" onClick={()=>setTab(item)} className={`h-[44px] border-b-[3px] text-[12px] font-semibold ${tab===item?"border-[#df8749] text-[#df8749]":"border-transparent text-[#777980]"}`}>{item}</button>)}</div>
       <div className="grid grid-cols-3 gap-[2px] bg-white">{Array.from({length:9},(_,i)=><Media key={i} index={i} onClick={()=>{trackEvent("media_clicked",{country:country||"BR",event_step:"media_grid"});setActiveMedia(false);setActivePost(true);window.scrollTo({top:0,behavior:"smooth"})}} />)}</div>
      </div> : <>
     <div id="conteudo" className="space-y-4 bg-[#f8f3f0] p-3">
      {[0].map((i)=><article key={i} className="overflow-hidden rounded-[24px] border border-[#eee7e3] bg-white">
       <div className="flex h-[82px] items-center justify-between px-4"><div className="flex items-center gap-3"><img src={profileImage} alt="" className="h-[58px] w-[58px] rounded-full object-cover"/><div><div className="flex items-center gap-1 text-[15px] font-bold">Tia Camila <span className="text-[#4389d8]">✓</span></div><div className="text-[14px] text-[#34363b]">@tiacamila_69</div></div></div><button type="button" aria-label="Mais opções" onClick={()=>setModal("Escolha seu plano")} className="px-1 text-xl">⋮</button></div>
       <button type="button" onClick={()=>{trackEvent("media_clicked",{country:country||"BR",event_step:"post"});setActivePost(true);window.scrollTo({top:0,behavior:"smooth"})}} aria-label="Abrir publicação bloqueada" className="relative block aspect-[.78] w-full overflow-hidden bg-[#f4eadb]">
        <img src="/camila-post.jpg" alt="Publicação de Tia Camila" className="absolute inset-0 h-full w-full object-cover"/>
        {!paidAccess&&<Lock size={66} strokeWidth={1.6} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md"/>}
       </button>
       <div className="flex h-[58px] items-center justify-between px-5 text-[#606166]"><div className="flex items-center gap-4"><button type="button" aria-label="Curtir" onClick={()=>setLiked(v=>!v)} className={`flex items-center gap-1.5 ${liked?"text-[#df8749]":""}`}><Heart size={25} fill={liked?"currentColor":"none"}/><span className="text-[12px]">{liked?"276K":"276K"}</span></button><button type="button" aria-label="Comentários" onClick={()=>setComments(v=>!v)}><MessageCircle size={25}/></button><button type="button" aria-label="Assinar" onClick={()=>setModal("Escolha seu plano")}><span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[16px]">$</span></button></div><button type="button" aria-label="Salvar" onClick={()=>setSaved(v=>!v)} className={saved?"text-[#df8749]":""}><Bookmark size={25} fill={saved?"currentColor":"none"}/></button></div>
      </article>)}
     </div>
      </>}
    </section>
   </> : <section className="bg-[#f8f3f0] px-3 pt-3">
    <div className="mb-3 grid grid-cols-2 overflow-hidden rounded-[18px] border border-[#e9e4e1] bg-white">
     <button type="button" onClick={()=>setTab("Todos")} className={`flex h-[54px] items-center justify-center gap-2 border-b-[3px] text-[14px] font-semibold ${tab==="Todos"?"border-[#df8749] text-[#df8749]":"border-transparent text-[#303137]"}`}><Smartphone size={19}/>87 Postagens</button>
     <button type="button" onClick={openMedia} className="flex h-[54px] items-center justify-center gap-2 border-b-[3px] text-[14px] font-semibold border-transparent text-[#303137]"><PlaySquare size={19}/>142 Mídias</button>
    </div>
    <article className="overflow-hidden rounded-[24px] border border-[#eee7e3] bg-white">
     <div className="flex h-[82px] items-center justify-between px-4"><div className="flex items-center gap-3"><img src={profileImage} alt="" className="h-[58px] w-[58px] rounded-full object-cover"/><div><div className="flex items-center gap-1 text-[15px] font-bold">Tia Camila <span className="text-[#4389d8]">✓</span></div><div className="text-[14px] text-[#34363b]">@tiacamila_69</div></div></div><button type="button" aria-label="Mais opções" onClick={()=>setModal("Escolha seu plano")} className="px-1 text-xl">⋮</button></div>
     <button type="button" onClick={()=>setModal("Escolha seu plano")} aria-label="Conteúdo bloqueado" className="relative block aspect-[.78] w-full overflow-hidden bg-[#f4eadb]">
      <img src="/camila-post.jpg" alt="Publicação de Tia Camila" className="absolute inset-0 h-full w-full object-cover"/>
      {!paidAccess&&<Lock size={66} strokeWidth={1.6} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md"/>}
     </button>
     <div className="flex h-[58px] items-center justify-between px-5 text-[#606166]"><div className="flex items-center gap-4"><button type="button" aria-label="Curtir" onClick={()=>setLiked(v=>!v)} className={`flex items-center gap-1.5 ${liked?"text-[#df8749]":""}`}><Heart size={25} fill={liked?"currentColor":"none"}/><span className="text-[12px]">{liked?"276K":"276K"}</span></button><button type="button" aria-label="Comentários" onClick={()=>setComments(v=>!v)}><MessageCircle size={25}/></button><button type="button" aria-label="Assinar" onClick={()=>setModal("Escolha seu plano")}><span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[16px]">$</span></button></div><button type="button" aria-label="Salvar" onClick={()=>setSaved(v=>!v)} className={saved?"text-[#df8749]":""}><Bookmark size={25} fill={saved?"currentColor":"none"}/></button></div>
     {comments&&<div className="border-t border-[#f0ece9] p-3"><p className="mb-2 text-sm">Comentários disponíveis para assinantes.</p><button type="button" onClick={()=>setModal("Escolha seu plano")} className="text-sm font-semibold text-[#df8749]">Assinar para comentar</button></div>}
    </article>
   </section>}
  </main>
  <nav className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-[390px] rounded-full border border-white/80 bg-white/65 shadow-[0_5px_24px_rgba(80,65,55,.16)] backdrop-blur-xl"><div className="grid h-[62px] grid-cols-5 items-center">
   <button type="button" onClick={()=>{setActivePost(false);window.scrollTo({top:0,behavior:"smooth"})}} className="flex items-center justify-center text-[#303137]"><Smartphone size={24}/></button>
   <button type="button" onClick={()=>{setTab("Todos");document.getElementById("conteudo")?.scrollIntoView({behavior:"smooth",block:"start"})}} className="flex items-center justify-center text-[#303137]"><Star size={24}/></button>
   <button type="button" onClick={()=>{setActivePost(false);document.getElementById("assinaturas")?.scrollIntoView({behavior:"smooth",block:"center"})}} className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#fff8f3] text-[#303137]"><span className="text-[42px] font-light leading-none">+</span></button>
   <button type="button" onClick={()=>setChatOpen(true)} className="flex items-center justify-center text-[#303137]"><MessageCircle size={24}/></button>
   <button type="button" onClick={()=>{if((country||"BR")!=="BR"){goForeignTelegram();return}setPacksOpen(true)}} className="flex items-center justify-center text-[#303137]"><Compass size={24}/></button>
  </div></nav>
  {activeVipVideo!==null&&paidAccess&&<div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Vídeo VIP"><button type="button" onClick={()=>setActiveVipVideo(null)} aria-label="Fechar vídeo" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white"><X size={25}/></button><video key={activeVipVideo} src={vipPreviewVideos[activeVipVideo-1]} controls autoPlay playsInline className="max-h-[85vh] w-full max-w-[480px] rounded-xl bg-black" /></div>}
  {modal&&<PlanModal title={t.subscription} onClose={()=>setModal(null)} onCheckout={goToCheckout} onGift={goToGift} t={t} country={country||"BR"}/>}
  {packsOpen&&(country||"BR")==="BR"&&<PacksModal category={packCategory} onCategory={setPackCategory} onClose={()=>{setPacksOpen(false);setPackCategory(null);setSelectedPack(null)}} onSelect={(pack)=>{setPacksOpen(false);setPackCategory(null);setSelectedPack(pack)}}/>}
  {selectedPack&&<PixCheckout amountOverride={selectedPack.amount} description={`Pack ${selectedPack.title} - ${selectedPack.category} - Tia Camila`} packName={selectedPack.title} onClose={()=>setSelectedPack(null)} accessType="pack"/>}
  {chatOpen&&<PrivacyChat onClose={()=>setChatOpen(false)} onConversationEnd={()=>{setChatOpen(false);setWhatsappAccess(true)}}/>}
  {resumePayment&&<PixCheckout resume={resumePayment} onClose={()=>setResumePayment(null)} accessType="subscription" orderBumpsEnabled={false}/>}
  {paymentPlan&&<PixCheckout plan={paymentPlan} onClose={()=>setPaymentPlan(null)} accessType="subscription" orderBumpsEnabled/>}
  {giftCheckout&&<GiftCheckout onClose={()=>setGiftCheckout(false)}/>}
  {telegramNotice&&country!=="BR"&&<TelegramNotice t={t} onClose={()=>setTelegramNotice(false)} onContinue={()=>{trackEvent("foreign_telegram_clicked",{country:country||"unknown",event_step:"foreign_telegram_continue"});setTelegramNotice(false);window.location.href=foreignTelegramBotLink}}/>}
 </div>;
}
function CountrySelector({value,onChange}:{value:string;onChange:(code:string)=>void}){return <div className="flex h-9 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-2.5 shadow-sm"><Globe size={16} className="text-[#68707b]"/><select value={value} onChange={e=>onChange(e.target.value)} className="cursor-pointer appearance-none bg-transparent pr-1 text-sm font-medium outline-none">{countries.map(c=><option key={c[0]} value={c[0]}>{c[1]} {countryLabel(c[0],langForCountry(value||"EN"))}</option>)}</select></div>}
function Plan({title,price,onClick,popular=false,labels}:{title:string;price:string;onClick:()=>void;popular?:boolean;labels:Pick<Lang,"accessAfterConfirmation"|"choose"|"mostChosen">}){return <button type="button" onClick={onClick} className="group relative w-full overflow-visible rounded-full border border-[#ffb08a]/40 bg-gradient-to-r from-[#ff9a45] via-[#ffb28c] to-[#f7a095] px-4 py-2 text-left shadow-none transition active:scale-[.99] sm:px-5 sm:py-3"><div className="flex items-center justify-between gap-4"><div className="min-w-0"><div className="text-[16px] font-extrabold text-[#17191d]">{title}</div><div className="mt-1 text-[11px] text-[#9297a0]">{labels.accessAfterConfirmation}</div></div><div className="shrink-0 text-right"><div className="text-[19px] font-black tracking-[-.4px] text-[#17191d]">{price}</div><div className="mt-1 flex items-center justify-end gap-1 text-[10px] font-bold uppercase tracking-[.25px] text-[#ff6a2d]">{labels.choose} <ChevronRight size={13}/></div></div></div>{popular&&<div className="absolute -top-3 left-4 rounded-full bg-[#ff6a2d] px-3 py-1.5 text-[10px] font-black tracking-[.15px] text-white shadow-[0_4px_12px_rgba(255,106,45,.28)]">{labels.mostChosen}</div>}</button>}

function PacksModal({category,onCategory,onClose,onSelect}:{category:Pack["category"]|null;onCategory:(category:Pack["category"]|null)=>void;onClose:()=>void;onSelect:(pack:Pack)=>void}){
 const visible=category?packs.filter(p=>p.category===category):[];
 const categories:[Pack["category"],string,string,string,string][]=[
  ["Fotos","📸","Só Fotos","Conteúdos em fotos","Escolha a quantidade"],
  ["Vídeos","🎥","Só Vídeos","Conteúdos em vídeo","Escolha a quantidade"],
  ["Fotos + Vídeos","🔥","Fotos + Vídeos","O combo completo","Escolha a quantidade"]
 ];
 const categoryIcon=category==="Fotos"?"📸":category==="Vídeos"?"🎥":"🔥";
 return <div className="fixed inset-0 z-[75] flex items-end justify-center bg-black/65 backdrop-blur-md p-0 sm:items-center sm:p-4">
  <div className="relative flex max-h-[94svh] w-full max-w-[440px] flex-col overflow-hidden rounded-t-[32px] bg-[#f8f8f8] shadow-[0_25px_90px_rgba(0,0,0,.32)] sm:rounded-[32px]">
   <div className="shrink-0 border-b border-black/[0.06] bg-white px-5 pb-4 pt-4">
    <div className="mb-3 flex justify-center sm:hidden"><span className="h-1 w-10 rounded-full bg-black/10"/></div>
    <div className="flex items-center justify-between">
     <button type="button" onClick={()=>category?onCategory(null):onClose()} className="flex h-10 items-center gap-1.5 rounded-full px-2 text-[13px] font-bold text-[#5e6570] transition hover:bg-black/[0.04]"><ArrowLeft size={18}/>{category?"Voltar":"Fechar"}</button>
     <div className="text-center">
      <h3 className="text-[18px] font-extrabold tracking-[-.4px] text-[#17191d]">{category?"Escolha seu pack":"Packs exclusivos"}</h3>
      <p className="mt-0.5 text-[11px] font-medium text-[#969ba3]">{category?"Selecione uma opção":"Conteúdos especiais da Tia Camila"}</p>
     </div>
     <button type="button" onClick={onClose} aria-label="Fechar" className="flex h-10 w-10 items-center justify-center rounded-full text-[#5e6570] transition hover:bg-black/[0.04]"><X size={19}/></button>
    </div>
   </div>
   <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5">
    {!category?<div>
      <div className="mb-5 rounded-[24px] bg-gradient-to-br from-[#fff0e7] via-white to-[#fff8f3] p-5 shadow-[0_4px_18px_rgba(0,0,0,.04)]">
       <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[25px] shadow-sm">🎁</div>
        <div><div className="text-[16px] font-extrabold text-[#17191d]">Escolha seu conteúdo</div><div className="mt-0.5 text-[12px] text-[#7c828b]">Selecione uma categoria para ver os packs.</div></div>
       </div>
      </div>
      <div className="space-y-3">
       {categories.map(([key,icon,title,subtitle,helper])=><button type="button" key={key} onClick={()=>onCategory(key)} className="group flex w-full items-center gap-4 rounded-[22px] border border-black/[0.06] bg-white p-4 text-left shadow-[0_3px_14px_rgba(0,0,0,.045)] transition duration-200 hover:-translate-y-0.5 hover:border-[#ffc2a4] hover:shadow-[0_10px_28px_rgba(0,0,0,.09)] active:scale-[.99]">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[19px] bg-[#fff1e9] text-[27px]">{icon}</span>
        <span className="min-w-0 flex-1"><strong className="block text-[16px] font-extrabold text-[#17191d]">{title}</strong><span className="mt-1 block text-[12px] text-[#7c828b]">{subtitle}</span><span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[.35px] text-[#b0b4ba]">{helper}</span></span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff1e9] text-[#ff6a2d] transition group-hover:translate-x-0.5"><ChevronRight size={18}/></span>
       </button>)}
      </div>
    </div>:<div>
      <div className="mb-5 rounded-[24px] bg-white p-4 shadow-[0_3px_14px_rgba(0,0,0,.045)]">
       <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e9] text-[24px]">{categoryIcon}</div>
        <div className="min-w-0"><div className="text-[16px] font-extrabold text-[#17191d]">{category}</div><div className="mt-0.5 text-[12px] text-[#7c828b]">Escolha o pack que deseja liberar.</div></div>
       </div>
      </div>
      <div className="space-y-3">
       {visible.map((pack,index)=><button type="button" key={pack.id} onClick={()=>onSelect(pack)} className="group relative w-full overflow-visible rounded-[23px] border border-black/[0.07] bg-white p-4 text-left shadow-[0_3px_15px_rgba(0,0,0,.045)] transition duration-200 hover:-translate-y-0.5 hover:border-[#ffb08a] hover:shadow-[0_12px_30px_rgba(0,0,0,.10)] active:scale-[.99]">
        <div className="flex items-center justify-between gap-4">
         <div className="min-w-0 flex-1 pr-2">
          <div className="text-[16px] font-extrabold leading-5 text-[#17191d]">{pack.title}</div>
          <div className="mt-1.5 text-[11px] leading-4 text-[#9297a0]">Acesso liberado após a confirmação do pagamento</div>
         </div>
         <div className="shrink-0 text-right">
          <div className="text-[19px] font-black tracking-[-.4px] text-[#17191d]">R$ {pack.amount.toFixed(2).replace(".",",")}</div>
          <div className="mt-1 flex items-center justify-end gap-1 text-[10px] font-bold uppercase tracking-[.25px] text-[#ff6a2d]">Escolher <ChevronRight size={13}/></div>
         </div>
        </div>
        {index===1&&<div className="absolute -top-3 left-4 rounded-full bg-[#ff6a2d] px-3 py-1.5 text-[10px] font-black tracking-[.15px] text-white shadow-[0_4px_12px_rgba(255,106,45,.28)]">🔥 MAIS ESCOLHIDO</div>}
       </button>)}
      </div>
      <p className="mt-5 text-center text-[10px] leading-4 text-[#a0a5ad]">Pagamento via PIX • acesso após confirmação</p>
    </div>}
   </div>
  </div>
 </div>
}
const mediaVariants=[
 {position:"50% 4%",scale:1.48,rotate:-1.4,brightness:1.03,saturate:.96,overlay:"rgba(255,255,255,.10)"},
 {position:"18% 10%",scale:1.86,rotate:1.2,brightness:1.05,saturate:1.02,overlay:"rgba(255,232,218,.12)"},
 {position:"82% 12%",scale:1.72,rotate:-.8,brightness:.97,saturate:1.08,overlay:"rgba(228,238,255,.12)"},
 {position:"30% 34%",scale:1.98,rotate:.9,brightness:1.02,saturate:.92,overlay:"rgba(255,246,226,.13)"},
 {position:"70% 32%",scale:1.78,rotate:-1.5,brightness:.96,saturate:1.08,overlay:"rgba(243,231,255,.12)"},
 {position:"12% 58%",scale:2.12,rotate:.6,brightness:1.04,saturate:1.0,overlay:"rgba(226,246,239,.12)"},
 {position:"88% 56%",scale:1.92,rotate:-.9,brightness:1.00,saturate:.94,overlay:"rgba(255,228,240,.12)"},
 {position:"38% 78%",scale:2.04,rotate:1.3,brightness:.94,saturate:1.1,overlay:"rgba(232,232,255,.12)"},
 {position:"64% 74%",scale:1.88,rotate:-.5,brightness:1.03,saturate:.98,overlay:"rgba(255,242,222,.12)"}
];
function Media({onClick,index}:{onClick:()=>void;index:number}){return <button type="button" onClick={onClick} aria-label={`Mídia bloqueada ${index+1}`} className="group relative aspect-square overflow-hidden border border-white bg-[#f4eadb]"><div aria-hidden="true" className="absolute inset-0" style={{background:"linear-gradient(135deg,rgba(255,255,255,.22),rgba(233,216,196,.12))"}}/><div className="absolute inset-0 flex items-center justify-center"><Lock size={22} strokeWidth={1.7} className="text-[#6d7280]"/></div></button>}
function PlanModal({title,onClose,onCheckout,onGift,t,country}:{title:string;onClose:()=>void;onCheckout:(plan:string)=>void;onGift:()=>void;t:Lang;country:string}){const foreign=country!=="BR";return <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-0 sm:items-center sm:p-4" onClick={onClose}><div className="w-full max-w-md rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl" onClick={e=>e.stopPropagation()}><div className="mb-4 flex items-center justify-between"><button type="button" onClick={onClose} className="text-[#68707b]"><ArrowLeft size={21}/></button><h3 className="text-lg font-bold">{title}</h3><button type="button" onClick={onClose} className="text-[#68707b]"><X size={21}/></button></div><p className="mb-4 text-center text-sm text-[#68707b]">{foreign?t.telegramText:t.choosePlan}</p><div className="space-y-2"><Plan title={t.plan1} price={foreign?foreignPrice(country,"1 mês"):"R$ 19,90"} onClick={()=>onCheckout("1 mês")} labels={t}/><Plan title={t.plan3} price={foreign?foreignPrice(country,"3 meses"):"R$ 49,90"} onClick={()=>onCheckout("3 meses")} popular labels={t}/><Plan title="Vitalício" price={foreign?foreignPrice(country,"Vitalício"):"R$ 97,90"} onClick={()=>onCheckout("Vitalício")} labels={t}/>{foreign&&<p className="pt-1 text-center text-[11px] text-[#8a9099]">{t.approximate}</p>}{!foreign&&<button type="button" onClick={onGift} className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full border border-[#ff6a2d] text-[#ff6a2d] font-semibold"><Gift size={19}/>{t.gift}</button>}</div></div></div>}
function TelegramNotice({t,onClose,onContinue}:{t:Lang;onClose:()=>void;onContinue:()=>void}){return <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/55 p-0 sm:items-center sm:p-4"><div className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"><div className="mb-5 flex items-center justify-between"><button type="button" onClick={onClose} className="text-[#68707b]"><ArrowLeft size={21}/></button><h3 className="text-lg font-bold">{t.telegramTitle}</h3><button type="button" onClick={onClose} className="text-[#68707b]"><X size={21}/></button></div><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef7ff] text-[#229ed9]"><Send size={27}/></div><p className="mt-5 text-center text-[15px] leading-6 text-[#4f5865]">{t.telegramText}</p><button type="button" onClick={onContinue} className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#229ed9] font-bold text-white shadow-sm"><Send size={18}/>{t.telegramButton}</button><button type="button" onClick={onClose} className="mt-2 h-11 w-full rounded-xl text-sm font-semibold text-[#68707b]">{t.telegramBack}</button></div></div>}
function PixCheckout({plan,amountOverride,description,packName,onClose,accessType,orderBumpsEnabled=false,orderBumpKeys,showUpsell=true,onPaid,resume}:{plan?:string|undefined;amountOverride?:number|undefined;description?:string|undefined;packName?:string|undefined;onClose:()=>void;accessType?:"subscription"|"gift"|"whatsapp"|"pack";orderBumpsEnabled?:boolean;orderBumpKeys?:Array<OrderBumpKey>;showUpsell?:boolean;onPaid?:()=>void;resume?:ResumePayment}){
 const [step,setStep]=useState<"options"|"customer"|"loading"|"pix"|"checkout"|"paid">(resume?"pix":"options");
 const [paymentMethod,setPaymentMethod]=useState<"pix"|"checkout">("pix");
 const [pixCode,setPixCode]=useState(resume?.pixCode||""); const [pixImage,setPixImage]=useState(resume?.pixImage||""); const [identifier,setIdentifier]=useState(resume?.identifier||""); const [checkoutUrl,setCheckoutUrl]=useState(""); const [error,setError]=useState(""); const [copied,setCopied]=useState(false);
 const [selectedBumps,setSelectedBumps]=useState<OrderBumpKey[]>([]); const [upsellOpen,setUpsellOpen]=useState(false); const [selectedUpsell,setSelectedUpsell]=useState<keyof typeof upsellOffers|null>(null); const [exitOfferOpen,setExitOfferOpen]=useState(false);
 const checkoutMotion=<style>{`@keyframes mikaFadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes mikaGiftGlow{0%,100%{box-shadow:0 0 0 0 rgba(255,106,45,.08)}50%{box-shadow:0 0 28px 4px rgba(255,106,45,.14)}}@keyframes mikaGiftIcon{0%{transform:scale(.75) rotate(-8deg);opacity:0}70%{transform:scale(1.06) rotate(2deg);opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}@keyframes mikaBumpIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}`}</style>;
 
 const baseAmount=resume?.amount ?? amountOverride ?? (plan ? planAmounts[plan] ?? 0 : 0); const bumpAmount=selectedBumps.reduce((sum,key)=>sum+(orderBumps[key as keyof typeof orderBumps]?.amount||0),0); const amount=baseAmount+bumpAmount;
 const isGift=accessType==="gift"; const isWhatsapp=accessType==="whatsapp"; const isPack=accessType==="pack"; const isTax9_90Offer=baseAmount===9.9;
 const idempotencyKeyRef=useRef<string|null>(null); const pixCreationStarted=useRef(false);
 const bumpNames=selectedBumps.map(key=>orderBumps[key as keyof typeof orderBumps]?.label).filter(Boolean);
 const finalDescription=description||(resume?.label|| (isGift?"Mimo - Tia Camila":isPack?("Pack "+packName+" - Tia Camila"):isWhatsapp?"Acesso exclusivo WhatsApp - Tia Camila":("Assinatura "+plan+" - Tia Camila")));

  const startPayment=async(method:"pix"|"checkout")=>{
  if(pixCreationStarted.current)return;
  pixCreationStarted.current=true;setPaymentMethod(method);setError("");setStep("loading");
  const popup=method==="checkout"?window.open("about:blank","_blank"):null;
  try{
   if(!Number.isFinite(amount)||amount<=0)throw new Error("Valor inválido.");
   // Gere uma chave nova para cada tentativa. Reutilizar uma chave salva no
   // localStorage pode fazer a TichuPay devolver uma cobrança antiga expirada.
   let idempotencyKey=idempotencyKeyRef.current;
   if(!idempotencyKey){
    try{idempotencyKey=crypto.randomUUID()}catch{idempotencyKey="tichu_"+Date.now()+"_"+Math.random().toString(36).slice(2)}
    idempotencyKeyRef.current=idempotencyKey;
   }
   const res=await fetch("/api/pix/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount,description:finalDescription,idempotency_key:idempotencyKey,lead_id:getLeadId(),source:getAttribution().source,campaign:getAttribution().campaign,order_bumps:bumpNames})});
   const data=await res.json().catch(()=>({}));if(!res.ok||!data.identifier){const detailsText=typeof data.details==="string"?data.details:(data.details?JSON.stringify(data.details):"");const message=data.error||"Não foi possível iniciar o pagamento.";throw new Error(detailsText?message+" Detalhes: "+detailsText:message)}
   setIdentifier(data.identifier);
   const accessUrl=telegramLink;
   const accessLabel=isWhatsapp?"Acesso exclusivo WhatsApp":isTax9_90Offer?"Acesso pelo Telegram":isPack?("Pack "+(packName||"")):("Assinatura "+(plan||""));
   savePendingAccess({identifier:data.identifier,amount,label:accessLabel,url:accessUrl,createdAt:Date.now(),pixCode:String(data.pix_code||""),pixImage:String(data.pix_image||"")});
   if(method==="checkout"){const url=String(data.checkout_url||"");if(!url)throw new Error("O gateway de pagamento não retornou um link de checkout.");setCheckoutUrl(url);if(popup)popup.location.href=url;else window.open(url,"_blank","noopener,noreferrer");setStep("checkout");trackEvent("atenaspay_checkout_opened",{plan:plan||null,amount,bump_items:bumpNames,event_step:"checkout"});toast.success("Pagamento iniciado!",{description:"Conclua o pagamento na página de pagamento. Esta tela continuará acompanhando a confirmação."})}
   else{if(!data.pix_code)throw new Error(data.error||"O gateway de pagamento não retornou o código PIX.");setPixCode(data.pix_code);setPixImage(data.pix_image||"");setStep("pix");trackEvent("pix_generated",{plan:plan||resume?.label||null,amount,bump_items:bumpNames,event_step:"checkout",external_id:data.identifier,country:getStoredCountry(),metadata:{fbp:document.cookie.match(/(?:^|; )_fbp=([^;]+)/)?.[1]||null,fbc:document.cookie.match(/(?:^|; )_fbc=([^;]+)/)?.[1]||null,user_agent:navigator.userAgent,source_url:window.location.href}});}
  }catch(e){if(popup)popup.close();setError(e instanceof Error?e.message:"Não foi possível iniciar o pagamento.");setStep("options")}finally{pixCreationStarted.current=false}
 };

 // A cobrança Pix começa quando o usuário toca em PIX; a TichuPay não exige dados pessoais neste endpoint.
 useEffect(()=>{if(step!=="pix"&&step!=="checkout")return;if(!identifier)return;const timer=window.setInterval(async()=>{try{const res=await fetch("/api/pix/status?identifier="+encodeURIComponent(identifier),{});if(!res.ok)return;const data=await res.json();if(data?.payment?.status==="paid"){
  const accessUrl=telegramLink;
  const accessLabel=resume?.label||(isWhatsapp?"Acesso exclusivo WhatsApp":isTax9_90Offer?"Acesso pelo Telegram":isPack?("Pack "+(packName||"")):("Assinatura "+(plan||"")));
  savePaidAccess({identifier,amount,label:accessLabel,url:telegramLink,createdAt:Date.now()});
  window.dispatchEvent(new Event("paid-access-updated"));
  clearPendingAccess();
  setStep("paid");trackEvent("payment_confirmed",{plan:plan||resume?.label||null,amount,event_step:"checkout",event_id:`purchase_${identifier}`,country:getStoredCountry(),fbp:document.cookie.match(/(?:^|; )_fbp=([^;]+)/)?.[1]||null,fbc:document.cookie.match(/(?:^|; )_fbc=([^;]+)/)?.[1]||null,source_url:window.location.href,user_agent:navigator.userAgent});try{const w=window as typeof window & {fbq?:((...args:any[])=>void)};w.fbq?.("track","Purchase",{value:Number(amount.toFixed(2)),currency:"BRL",content_name:description,content_type:"product"},{eventID:`purchase_${identifier}`})}catch{};onPaid?.();toast.success("Pagamento confirmado!",{description:"Seu acesso foi liberado."})}}catch{}},15000);return()=>window.clearInterval(timer)},[step,identifier,onPaid,plan,amount]);
 useEffect(()=>{if(step!=="paid")return;const redirectTimer=window.setTimeout(()=>{window.location.href=telegramLink},1800);return()=>window.clearTimeout(redirectTimer)},[step]);
 const copyPix=async()=>{try{await navigator.clipboard.writeText(pixCode);trackEvent("pix_copy_clicked",{plan:plan||null,amount,event_step:"checkout"});setCopied(true);window.setTimeout(()=>setCopied(false),1800)}catch{setError("Não foi possível copiar automaticamente. Selecione o código e copie manualmente.")}};
 const qrUrl=pixImage?(pixImage.startsWith("data:")||pixImage.startsWith("http")?pixImage:"data:image/png;base64,"+pixImage):"https://quickchart.io/qr?size=320&margin=2&text="+encodeURIComponent(pixCode);
 const openUpsell=(key:keyof typeof upsellOffers)=>{setSelectedUpsell(key);setUpsellOpen(true);trackEvent("upsell_clicked",{from_plan:plan||null,to_plan:key,amount:upsellOffers[key].amount,event_step:"upsell"})};

 return <><Toaster position="top-center" richColors closeButton /><div className={`fixed inset-0 z-[60] grid bg-black/55 ${step==="pix"?"place-items-center p-3 sm:p-4":"items-end justify-items-center p-0 sm:place-items-center sm:p-4"}`}><div className={`mx-auto max-h-[90svh] w-full overflow-y-auto shadow-2xl ${step==="pix"?"max-w-[640px] rounded-[28px] bg-[#f8f5f2] p-0":"max-w-md rounded-t-3xl bg-white p-5 sm:rounded-3xl"}`} onClick={e=>e.stopPropagation()}>
 {step!=="pix"&&<div className="mb-4 flex items-center justify-between"><button type="button" onClick={()=>{if(step==="pix"&&identifier&&!exitOfferOpen){setExitOfferOpen(true);trackEvent("pix_exit_offer_opened",{plan:plan||null,amount,event_step:"checkout"});return}onClose()}} className="text-[#68707b]"><ArrowLeft size={21}/></button><h3 className="text-lg font-bold">{step==="loading"?"Preparando pagamento":step==="checkout"?"Pagamento":"Pagamento"}</h3><button type="button" onClick={()=>onClose()} className="text-[#68707b]"><X size={21}/></button></div>}
 <>{exitOfferOpen&&step==="pix"&&<div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 sm:items-center"><div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"><div className="p-6 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0e8] text-[#ff6a2d]">🎁</div><p className="mt-4 text-xs font-black uppercase tracking-[.14em] text-[#ff6a2d]">Oferta exclusiva antes de sair</p><h4 className="mt-2 text-2xl font-extrabold leading-tight text-[#20242b]">Espera... eu deixei um bônus pra você. ❤️</h4><p className="mt-3 text-sm leading-5 text-[#68707b]">Seu PIX já está pronto. Se você concluir este pagamento, além do acesso, eu libero uma condição especial que preparei para quem chegou até aqui.</p><div className="mt-4 rounded-2xl border border-[#ff6a2d]/15 bg-[#fffaf7] p-4 text-left"><p className="text-sm font-extrabold text-[#303640]">✨ Bônus exclusivo</p><p className="mt-1 text-xs leading-5 text-[#68707b]">O bônus fica reservado junto com este pagamento e não aparece para todo mundo.</p></div><button type="button" onClick={()=>{setExitOfferOpen(false);trackEvent("pix_exit_offer_accepted",{plan:plan||null,amount,event_step:"checkout"})}} className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#ff6a2d] font-bold text-white">Continuar com meu PIX</button><button type="button" onClick={()=>{setExitOfferOpen(false);trackEvent("pix_exit_offer_declined",{plan:plan||null,amount,event_step:"checkout"});onClose()}} className="mt-2 h-11 w-full text-sm font-semibold text-[#68707b]">Não quero, sair mesmo assim</button></div></div></div>}</>{step==="options"&&<div className="py-3">{checkoutMotion}{error&&<div className="mb-4 rounded-2xl bg-red-50 p-3 text-sm text-red-600">{error}</div>}
 <div className="mt-4 overflow-hidden rounded-[22px] border border-[#eee7e3] bg-white"><div className="flex items-center gap-3 border-b border-[#eee7e3] p-4"><img src={profileImage} alt="Tia Camila" className="h-14 w-14 rounded-full object-cover"/><div className="min-w-0 flex-1"><div className="text-[15px] font-extrabold text-[#20242b]">{isWhatsapp?"WhatsApp exclusivo":isGift?"Mimo exclusivo":isPack?(packName||"Pack exclusivo"):(plan||"Assinatura")}</div><div className="mt-0.5 text-xs text-[#8a9099]">@tiacamila_69</div><div className="mt-1 text-[11px] font-semibold text-[#ff6a2d]">Benefícios exclusivos</div></div></div><div className="space-y-2 px-4 py-3 text-[12px] text-[#515965]"><div className="flex items-center gap-2"><CheckCircle2 size={14} className="shrink-0 text-[#ff8a54]"/>Acesso ao conteúdo exclusivo</div><div className="flex items-center gap-2"><CheckCircle2 size={14} className="shrink-0 text-[#ff8a54]"/>Conteúdos novos e especiais</div><div className="flex items-center gap-2"><CheckCircle2 size={14} className="shrink-0 text-[#ff8a54]"/>Acesso liberado após a confirmação do pagamento</div></div><div className="border-t border-[#eee7e3] bg-[#faf8f6] px-4 py-3"><div className="text-[11px] text-[#8a9099]">Valor total</div><div className="mt-0.5 text-[24px] font-extrabold tracking-[-.5px] text-[#20242b]">R$ {amount.toFixed(2).replace(".",",")}</div>{selectedBumps.length>0&&<div className="mt-1 text-[11px] text-[#68707b]">{selectedBumps.length} adicional(is) selecionado(s) • total atualizado automaticamente</div>}</div></div>
 <div className="mt-4"><p className="mb-3 text-[15px] font-extrabold text-[#20242b]">Formas de pagamento</p><button type="button" onClick={()=>{startPayment("pix")}} className="flex min-h-[48px] w-full items-center justify-between rounded-full border border-[#f0c6a9] bg-[#fff7f1] px-4 py-3 text-left transition active:scale-[.99]"><span className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#169b65] font-black">₱</span><span><strong className="block text-[13px] text-[#303640]">PIX</strong><span className="block text-[10px] text-[#8a9099]">QR Code ou Copia e Cola</span></span></span><span className="text-[13px] font-extrabold text-[#ff6a2d]">Pagar R$ {amount.toFixed(2).replace(".",",")}</span></button><p className="mt-2 text-center text-[10px] text-[#9a9fa6]">Pagamento processado com segurança • acesso após confirmação</p></div> <div className="mt-5 rounded-2xl border border-black/[.07] bg-[#fafafa] p-3"><div className="mb-2 px-1"><p className="text-xs font-black uppercase tracking-[.12em] text-[#ff6a2d]">Opcional</p><p className="mt-0.5 text-sm font-bold text-[#303640]">Quer adicionar algo ao seu pedido?</p><p className="mt-0.5 text-[11px] text-[#8a9099]">Primeiro garanta seu acesso. Depois, se quiser, personalize com um extra.</p></div>{orderBumpsEnabled&&<><div className="text-center" style={{animation:"mikaFadeUp .45s ease-out both"}}><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0e8] text-[#ff6a2d]" style={{animation:"mikaGiftIcon .65s ease-out both"}}>🔥</div><h4 className="mt-4 text-2xl font-extrabold">Personalize seu pedido</h4><p className="mt-2 text-sm leading-5 text-[#68707b]">Escolha os extras que combinam com seu acesso.</p></div><div className="mt-5 overflow-hidden rounded-3xl border border-[#ff6a2d]/15 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]"><div className="border-b border-black/[.06] bg-gradient-to-r from-[#fff7f1] to-white px-5 py-4"><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[.12em] text-[#ff6a2d]">Adicione ao seu pedido</p><p className="mt-1 text-sm text-[#68707b]">Você pode adicionar ou deixar para depois.</p></div><span className="rounded-full bg-[#ff6a2d]/10 px-3 py-1 text-xs font-bold text-[#ff6a2d]">Opcional</span></div></div><div className="divide-y divide-black/[.06]">{(orderBumpKeys ?? (Object.keys(orderBumps) as Array<keyof typeof orderBumps>)).map((key,index)=>{const item=orderBumps[key];const checked=selectedBumps.includes(key);const icon=key==="whatsapp"?"💬":key==="videoCall"?"📹":"🎬";const description=key==="whatsapp"?"Fale diretamente comigo pelo WhatsApp.":key==="videoCall"?"Chamada de vídeo pelo WhatsApp até gozar. Disponível apenas para os 3 primeiros.":"Conteúdos exclusivos do jeito que você escolher, em vídeos de até 15 minutos.";return <label key={key} style={{animation:"mikaBumpIn .38s ease-out "+(index*.08)+"s both"}} className={"flex cursor-pointer items-center gap-3 px-4 py-4 transition-colors "+(checked?"bg-[#fff8f3]":"bg-white")}><input type="checkbox" checked={checked} onChange={()=>{setSelectedBumps(prev=>checked?prev.filter(x=>x!==key):[...prev,key]);trackEvent("order_bump_selected",{bump:key,selected:!checked,amount:item.amount,event_step:"checkout"})}} className="sr-only"/><span className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl "+(checked?"bg-[#ffeadf]":"bg-[#f7f7f7]")}>{icon}</span><span className="min-w-0 flex-1"><strong className="block text-sm font-extrabold">{item.label}{key==="videoCall"&&<span className="ml-2 rounded-full bg-[#ff6a2d]/10 px-2 py-0.5 text-[9px] font-black uppercase text-[#ff6a2d]">Especial</span>}</strong><span className="mt-0.5 block text-xs leading-4 text-[#68707b]">{description}</span><span className="mt-1 block text-xs font-bold text-[#ff6a2d]">+ R$ {item.amount.toFixed(2).replace(".",",")}</span></span><span className={"shrink-0 rounded-xl px-3 py-2 text-xs font-extrabold "+(checked?"bg-[#ff6a2d] text-white":"bg-[#f5f5f5] text-[#3f4650]")}>{checked?"✓ Adicionado":"Adicionar"}</span></label>})}</div></div></>}</div>
 </div>}

 {step==="loading"&&<div className="py-14 text-center"><Loader2 size={42} className="mx-auto animate-spin text-[#ff6a2d]"/><h4 className="mt-5 text-xl font-bold">Preparando seu pagamento...</h4><p className="mt-2 text-sm text-[#68707b]">Aguarde um instante.</p><div className="mt-5 rounded-2xl bg-[#fff6ef] p-4"><div className="text-sm text-[#68707b]">{paymentMethod==="checkout"?"Pagamento":"Pagamento • PIX"}</div><div className="mt-1 flex items-center justify-between"><strong>{isWhatsapp?"Acesso WhatsApp":isGift?"Mimo":isPack?packName:plan}</strong><strong>R$ {amount.toFixed(2).replace(".",",")}</strong></div></div></div>}
 {step==="pix"&&<div className="w-full">
 <div className="relative h-[118px] overflow-hidden rounded-t-[28px] bg-[#e9ded6]"><img src={bannerImage} alt="Banner do perfil" className="absolute inset-0 h-full w-full object-cover" style={{objectPosition:"center 51%"}}/><button type="button" onClick={()=>{if(identifier&&!exitOfferOpen){setExitOfferOpen(true);trackEvent("pix_exit_offer_opened",{plan:plan||null,amount,event_step:"checkout"});return}onClose()}} aria-label="Fechar pagamento" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#303640] shadow-sm"><X size={20}/></button></div>
 <div className="px-6 pb-6 sm:px-7">
 <div className="-mt-[46px] flex flex-col items-center text-center"><img src={profileImage} alt="Foto do perfil" className="relative z-[1] h-[92px] w-[92px] shrink-0 rounded-full border-[5px] border-[#f8f5f2] bg-[#f8f5f2] object-cover object-center shadow-md"/><div className="mt-2 w-full text-center"><div className="text-[19px] font-extrabold tracking-[-.35px] text-[#20242b]">Tia Camila</div><div className="text-[14px] text-[#737781]">@tiacamila_69</div></div></div>
 <div className="mt-6 text-left"><h4 className="text-[18px] font-extrabold text-[#20242b]">Benefícios exclusivos</h4><div className="mt-3 space-y-2 text-[16px] text-[#5d6067]"><div className="flex items-center gap-2.5"><span className="text-[#e88b45]">✓</span>Acesso ao conteúdo</div><div className="flex items-center gap-2.5"><span className="text-[#e88b45]">✓</span>Chat exclusivo com a criadora</div><div className="flex items-center gap-2.5"><span className="text-[#e88b45]">✓</span>Cancele a qualquer hora</div></div></div>
 <div className="mt-5 text-left text-[32px] font-extrabold tracking-[-1.1px] text-[#20242b]">R$ {amount.toFixed(2).replace(".",",")}</div>
 <div className="mt-3 flex items-center justify-center gap-2.5 rounded-2xl bg-white/80 px-4 py-3 text-[13px] font-semibold text-[#737781]"><Loader2 size={18} className="shrink-0 animate-spin text-[#e9954d]"/>Aguardando a confirmação do pagamento...</div>
 <div className="mt-4 text-left"><h4 className="mb-4 text-[22px] font-extrabold tracking-[-.55px] text-[#303030]">Formas de pagamento</h4>
 <div className="flex h-[56px] w-full items-center gap-2 rounded-full border-[1.5px] border-[#e9954d] bg-[#fffaf6] p-1.5 pl-4"><div className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[14px] text-[#20242b]">{pixCode}</div><button type="button" onClick={copyPix} className={`flex h-[44px] shrink-0 items-center justify-center rounded-full px-5 text-[15px] font-bold text-white ${copied?"bg-green-600":"bg-[#f28b3d]"}`}>{copied?"Copiado":"Copiar Pix"}</button></div>
 <p className="mt-5 text-center text-[11px] leading-[1.6] text-[#737078]">Em pagamentos recorrentes, sua assinatura é renovada conforme as condições do plano até você cancelar. Consulte os <span className="text-[#d98743] underline">Termos de Serviço</span>.</p>
 </div></div></div>}
{step==="checkout"&&<div className="py-8 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0e8] text-[#ff6a2d]">💳</div><h4 className="mt-4 text-2xl font-bold">Finalize o pagamento</h4><p className="mt-2 text-sm text-[#68707b]">O checkout foi aberto em outra aba. Conclua o pagamento na página segura de pagamento.</p><button type="button" onClick={()=>checkoutUrl&&window.open(checkoutUrl,"_blank","noopener,noreferrer")} className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#ff6a2d] font-bold text-white">Abrir checkout novamente</button><div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#68707b]"><Loader2 size={16} className="animate-spin"/>Aguardando confirmação...</div></div>}
 {step==="paid"&&<div className="py-8 text-center"><CheckCircle2 size={58} className="mx-auto text-green-600"/><h4 className="mt-4 text-2xl font-bold">Pagamento confirmado</h4><p className="mt-2 text-sm text-[#68707b]">Seu pagamento foi confirmado! Você será direcionado ao Telegram em instantes e seu conteúdo VIP ficará liberado neste site.</p><button type="button" onClick={()=>{trackEvent("access_clicked",{plan:plan||resume?.label||null,amount,event_step:"telegram"});window.location.href=telegramLink}} className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#229ed9] font-bold text-white"><Send size={18}/>Continuar no Telegram</button><button type="button" onClick={async()=>{try{const dest=telegramLink;const link=window.location.origin+"?access="+encodeURIComponent(identifier)+"&dest="+encodeURIComponent(dest);await navigator.clipboard.writeText(link);trackEvent("access_link_copied",{amount,event_step:"cross_device",identifier});toast.success("Link de acesso copiado!",{description:"Você pode abrir este link em outro aparelho."})}catch{toast.error("Não foi possível copiar o link.")}}} className="mt-3 flex h-10 w-full items-center justify-center rounded-xl border border-black/10 bg-white text-xs font-bold text-[#3f4650]">🔗 Copiar link para outro aparelho</button><p className="mt-3 text-[11px] leading-4 text-[#9297a0]">Guarde este link se quiser recuperar o acesso em outro aparelho.</p></div>}
 {upsellOpen&&selectedUpsell&&<PixCheckout plan={selectedUpsell==="Vitalício"?undefined:selectedUpsell} amountOverride={upsellOffers[selectedUpsell].amount} description={"Upsell "+upsellOffers[selectedUpsell].label+" - Tia Camila"} onClose={()=>setUpsellOpen(false)} accessType="subscription" showUpsell={false}/>}
 </div></div></>
}

function ChatCheckout({onClose,onPaid}:{onClose:()=>void;onPaid:()=>void}){ 
 const [checkout,setCheckout]=useState(false);
 if(checkout)return <PixCheckout amountOverride={9.9} description="Desbloqueio do Chat - Tia Camila" onClose={onClose} accessType="subscription" showUpsell={false} onPaid={onPaid}/>;
 return <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/55 p-0 sm:items-center sm:p-4"><div className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl">
  <div className="mb-5 flex items-center justify-between"><button type="button" onClick={onClose}><ArrowLeft size={21}/></button><h3 className="text-lg font-bold">Fale comigo</h3><button type="button" onClick={onClose}><X size={21}/></button></div>
  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0e8] text-[#ff6a2d]"><MessageCircle size={34}/></div>
  <h4 className="mt-5 text-center text-2xl font-bold">Converse comigo</h4>
  <p className="mt-3 text-center text-[15px] leading-6 text-[#68707b]">Desbloqueie uma conversa exclusiva comigo.</p>
  <div className="mt-5 rounded-2xl bg-[#faf8f6] p-4 text-sm"><div className="flex justify-between"><span>Chat exclusivo</span><strong>Incluído</strong></div><div className="mt-2 flex justify-between"><span>Histórico da conversa</span><strong>Incluído</strong></div></div>
  <div className="mt-5 rounded-2xl bg-[#fff7f1] p-4 text-center"><div className="text-sm text-[#68707b]">Liberar por</div><div className="mt-1 text-2xl font-extrabold">R$ 9,90</div></div>
  <button type="button" onClick={()=>{trackEvent("chat_checkout_clicked",{amount:9.9,event_step:"chat_offer"});setCheckout(true)}} className="mt-5 h-12 w-full rounded-xl bg-[#ff6a2d] font-bold text-white">Continuar por R$ 9,90</button>
  <button type="button" onClick={onClose} className="mt-2 h-11 w-full rounded-xl text-sm font-semibold text-[#68707b]">Voltar</button>
 </div></div>}

function PrivacyChat({onClose,onConversationEnd}:{onClose:()=>void;onConversationEnd:()=>void}){
 const [unlocked,setUnlocked]=useState(()=>{try{return localStorage.getItem("dona-chat-unlocked")==="1"}catch{return false}});
 const [messages,setMessages]=useState<{role:"user"|"assistant";content:string}[]>(()=>{try{return JSON.parse(localStorage.getItem("dona-chat-messages")||"[]")}catch{return []}});
 const [input,setInput]=useState(""); const [loading,setLoading]=useState(false);

 useEffect(()=>{try{localStorage.setItem("dona-chat-messages",JSON.stringify(messages));}catch{}},[messages]);
 const unlockChat=()=>{try{localStorage.setItem("dona-chat-unlocked","1");}catch{};setUnlocked(true)};
 const send=async()=>{if(!input.trim()||loading)return;const text=input.trim();setInput("");const next=[...messages,{role:"user" as const,content:text}];setMessages(next);setLoading(true);try{
  const res=await fetch(SUPABASE_URL+"/functions/v1/privacy-chat",{method:"POST",headers:{"Content-Type":"application/json","apikey":SUPABASE_ANON_KEY,"Authorization":"Bearer "+SUPABASE_ANON_KEY},body:JSON.stringify({messages:next.slice(-20)})});
  const data=await res.json();if(!res.ok)throw new Error(data.error||"Não foi possível responder agora.");setMessages(v=>[...v,{role:"assistant",content:data.reply}]);
 }catch(e){setMessages(v=>[...v,{role:"assistant",content:e instanceof Error?e.message:"Não foi possível responder agora."}])}finally{setLoading(false)}};
 if(!unlocked)return <ChatCheckout onClose={onClose} onPaid={unlockChat}/>;
 return <div className="fixed inset-0 z-[95] flex items-end justify-center bg-black/55 p-0 sm:items-center sm:p-4">
  <div className="flex h-[92svh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:h-[720px] sm:rounded-3xl">
   <div className="flex items-center justify-between border-b px-4 py-4"><div><strong className="block">Fale comigo</strong><span className="text-xs text-[#68707b]">Conversa privada</span></div><button type="button" onClick={()=>{if(messages.length>0)onConversationEnd();else onClose()}}><X size={21}/></button></div>
   <div className="flex-1 space-y-3 overflow-y-auto bg-[#faf8f6] p-4">
    {messages.length===0&&<div className="mt-8 rounded-3xl bg-white p-5 text-center shadow-sm"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e8] text-[#ff6a2d]"><MessageCircle/></div><h4 className="mt-3 font-bold">Oi, amor ❤️</h4><p className="mt-1 text-sm text-[#68707b]">Pode começar a conversa comigo.</p></div>}
    {messages.map((m,i)=><div key={i} className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-5 ${m.role==="user"?"ml-auto bg-[#ff6a2d] text-white":"bg-white text-[#20242b] shadow-sm"}`}>{m.content}</div>)}
    {loading&&<div className="w-fit rounded-2xl bg-white px-4 py-3 text-sm text-[#68707b] shadow-sm">Digitando...</div>}
   </div>
   <div className="border-t bg-white p-3"><div className="flex gap-2"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Digite sua mensagem..." className="min-w-0 flex-1 rounded-xl border border-black/10 px-4 outline-none"/><button type="button" onClick={send} disabled={loading||!input.trim()} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff6a2d] text-white disabled:opacity-40"><Send size={18}/></button></div></div>
  </div>
 </div>
}
function WhatsappOffer({onClose}:{onClose:()=>void}){const [checkout,setCheckout]=useState(false);if(checkout)return <PixCheckout amountOverride={59.9} description="Acesso exclusivo WhatsApp - Tia Camila" onClose={onClose} accessType="whatsapp"/>;return <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/55 p-0 sm:items-center sm:p-4"><div className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"><div className="mb-5 flex items-center justify-between"><button type="button" onClick={onClose} className="text-[#68707b]"><ArrowLeft size={21}/></button><h3 className="text-lg font-bold">WhatsApp exclusivo</h3><button type="button" onClick={onClose} className="text-[#68707b]"><X size={21}/></button></div><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e9fbf0] text-[#25D366]"><MessageCircle size={34} fill="currentColor"/></div><h4 className="mt-5 text-center text-2xl font-bold">WhatsApp + VIP vitalício para os 10 primeiros</h4><p className="mt-3 text-center text-[15px] leading-6 text-[#68707b]">Oferta para os 10 primeiros: WhatsApp + VIP vitalício após a confirmação do pagamento.</p><div className="mt-5 rounded-2xl bg-[#f7f7f7] p-4 text-center"><div className="text-sm text-[#68707b]">Acesso exclusivo</div><div className="mt-1 text-2xl font-extrabold">R$ 27,90</div></div><button type="button" onClick={()=>{trackEvent("whatsapp_checkout_clicked",{amount:27.9,event_step:"whatsapp_offer"});setCheckout(true)}} className="mt-5 h-12 w-full rounded-xl bg-[#25D366] font-bold text-white shadow-sm">Pagar R$ 27,90 via PIX</button><button type="button" onClick={onClose} className="mt-2 h-11 w-full rounded-xl text-sm font-semibold text-[#68707b]">Voltar</button></div></div>}

function GiftCheckout({onClose}:{onClose:()=>void}){const [amountInput,setAmountInput]=useState("");const [selectedAmount,setSelectedAmount]=useState<number|null>(null);const [error,setError]=useState("");const choose=(value:number)=>{setSelectedAmount(value);setAmountInput("");setError("")};const custom=Number(amountInput.replace(",","."));const customValid=amountInput.trim()!==""&&Number.isFinite(custom)&&custom>=20&&custom<=100000;const currentAmount=selectedAmount??(Number.isFinite(custom)?custom:0);const proceed=()=>{setError("");if(!Number.isFinite(currentAmount)||currentAmount<20||currentAmount>100000){setError("O valor do Mimo deve ser entre R$ 20,00 e R$ 100.000,00.");return}setSelectedAmount(Number(currentAmount.toFixed(2)))};if(selectedAmount!==null)return <PixCheckout amountOverride={selectedAmount} description="Mimo - Tia Camila" onClose={onClose} accessType="gift"/>;return <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/55 p-0 sm:items-center sm:p-4"><div className="w-full max-w-md rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl"><div className="mb-5 flex items-center justify-between"><button type="button" onClick={onClose} className="text-[#68707b]"><ArrowLeft size={21}/></button><h3 className="text-lg font-bold">Enviar um Mimo</h3><button type="button" onClick={onClose} className="text-[#68707b]"><X size={21}/></button></div><p className="mb-4 text-center text-sm text-[#68707b]">Escolha o valor do seu mimo.</p><div className="grid grid-cols-3 gap-2"><button type="button" onClick={()=>{trackEvent("gift_amount_selected",{amount:20,event_step:"gift"});choose(20)}} className="h-12 rounded-xl border border-black/10 font-semibold hover:border-[#ff6a2d] hover:text-[#ff6a2d]">R$ 20</button><button type="button" onClick={()=>{trackEvent("gift_amount_selected",{amount:30,event_step:"gift"});choose(30)}} className="h-12 rounded-xl border border-black/10 font-semibold hover:border-[#ff6a2d] hover:text-[#ff6a2d]">R$ 30</button><button type="button" onClick={()=>{trackEvent("gift_amount_selected",{amount:50,event_step:"gift"});choose(50)}} className="h-12 rounded-xl border border-black/10 font-semibold hover:border-[#ff6a2d] hover:text-[#ff6a2d]">R$ 50</button></div><div className="mt-4"><label className="mb-2 block text-sm font-semibold">Outro valor</label><div className="flex gap-2"><div className="flex h-12 flex-1 items-center rounded-xl border border-black/10 px-4"><span className="mr-2 text-[#68707b]">R$</span><input value={amountInput} onChange={e=>{setAmountInput(e.target.value);setSelectedAmount(null);setError("")}} inputMode="decimal" placeholder="20,00 a 100.000,00" className="w-full outline-none"/></div><button type="button" onClick={proceed} disabled={!customValid} className="h-12 rounded-xl bg-[#ff6a2d] px-5 font-bold text-white disabled:opacity-40">Continuar</button></div>{error&&<p className="mt-2 text-xs text-red-600">{error}</p>}<p className="mt-2 text-xs text-[#8a9099]">Valor permitido: R$ 20,00 até R$ 100.000,00.</p></div></div></div>;
}
function CountryGate({onContinue}:{onContinue:(code:string)=>void}){
 const [selected,setSelected]=useState("");
 const lang=translations[langForCountry(selected||"EN")] as Lang;
 const continueFromGate=()=>{  if(!selected)return;
  trackEvent("profile_accessed",{country:selected,event_step:"country_gate"});
  onContinue(selected);
 };
 return <div className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-y-auto bg-black/35 p-4 backdrop-blur-md sm:p-6">
  <div className="absolute inset-0 bg-white/10"/>
  <div className="relative z-10 w-full max-w-[390px] overflow-hidden rounded-[28px] border border-white/50 bg-white/95 p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:p-7">
   <div className="mx-auto flex h-12 items-center justify-center"><img src="https://privacy.com.br/assets/v10/images/logo-black.svg" alt="Privacy" className="h-9 w-auto object-contain" /></div>
   <div className="mx-auto mt-5 h-[92px] w-[92px] overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_8px_25px_rgba(0,0,0,.16)]">
    <img src={profileImage} alt="Tia Camila" loading="eager" fetchPriority="high" decoding="async" className="block h-full w-full object-cover object-center"/>
   </div>
   <h1 className="mt-4 text-[24px] font-extrabold tracking-[-.8px] text-[#17191d]">Tia Camila</h1>
   <p className="mt-1 text-[13px] text-[#7b818a]">@tiacamila_69</p>
   <div className="mt-6 rounded-[20px] border border-black/[0.07] bg-[#faf8f6] p-4 text-left">
    <p className="text-center text-[14px] font-semibold text-[#303640]">{lang.chooseCountry}</p>
    <p className="mt-1 text-center text-[12px] leading-5 text-[#858b94]">{lang.chooseCountryText}</p>
    <select aria-label={lang.selectCountry} value={selected} onChange={e=>setSelected(e.target.value)} className="mt-4 block h-12 w-full cursor-pointer rounded-xl border border-black/[0.10] bg-white px-4 text-sm font-semibold text-[#20242b] outline-none focus:border-[#ff6a2d] focus:ring-2 focus:ring-[#ff6a2d]/15">
     <option value="" disabled>{lang.selectCountry}</option>
     {countries.map(c=><option key={c[0]} value={c[0]}>{c[1]} {countryLabel(c[0],langForCountry(selected||"EN"))}</option>)}
    </select>
    <button type="button" disabled={!selected} onClick={continueFromGate} className="mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-[#ff6a2d] px-5 text-sm font-bold text-white shadow-[0_6px_18px_rgba(255,106,45,.24)] transition hover:bg-[#f45f24] active:scale-[.98] disabled:cursor-not-allowed disabled:bg-[#ff6a2d]/40 disabled:shadow-none">
     {lang.continue}
    </button>
   </div>
   <p className="mt-4 text-[10px] leading-4 text-[#a1a5ac]">Seu país define o idioma e a experiência exibida no perfil.</p>
  </div>
 </div>
}
