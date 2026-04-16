import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const a11yScript = `
(function(){
  var SK='a11y-settings';
  var defaults={fontSize:0,highContrast:false,highlightLinks:false};
  function load(){try{var r=localStorage.getItem(SK);return r?JSON.parse(r):defaults}catch(e){return defaults}}
  function save(s){try{localStorage.setItem(SK,JSON.stringify(s))}catch(e){}}
  function apply(s){
    var h=document.documentElement;
    h.classList.remove('a11y-font-1','a11y-font-2');
    if(s.fontSize===1)h.classList.add('a11y-font-1');
    if(s.fontSize===2)h.classList.add('a11y-font-2');
    h.classList.toggle('a11y-high-contrast',s.highContrast);
    h.classList.toggle('a11y-highlight-links',s.highlightLinks);
  }
  var s=load();apply(s);

  var wrap=document.createElement('div');
  wrap.id='a11y-widget';
  wrap.style.cssText='position:fixed;bottom:16px;left:16px;z-index:9999;direction:rtl;';

  var btn=document.createElement('button');
  btn.setAttribute('aria-label','נגישות');
  btn.title='נגישות';
  btn.textContent='♿';
  btn.style.cssText='width:48px;height:48px;border-radius:50%;background:var(--primary);color:var(--primary-foreground);font-size:20px;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.3);';

  var panel=document.createElement('div');
  panel.style.cssText='display:none;margin-bottom:8px;width:256px;border-radius:12px;border:1px solid var(--border);background:var(--card);padding:16px;box-shadow:0 8px 24px rgba(0,0,0,.2);';

  function render(){
    var fl=['רגיל','גדול','גדול מאוד'];
    var bl=['א','א+','א++'];
    panel.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><b style="font-size:14px">הגדרות נגישות</b><button id="a11y-close" style="background:none;border:none;cursor:pointer;font-size:16px;color:var(--muted-foreground)">✕</button></div>'
      +'<p style="font-size:12px;margin-bottom:6px">גודל טקסט: '+fl[s.fontSize]+'</p>'
      +'<div style="display:flex;gap:6px;margin-bottom:12px">'
      +bl.map(function(l,i){return '<button data-fs="'+i+'" style="flex:1;border-radius:6px;border:1px solid '+(s.fontSize===i?'var(--primary)':'var(--border)')+';background:'+(s.fontSize===i?'var(--primary)':'transparent')+';color:'+(s.fontSize===i?'var(--primary-foreground)':'inherit')+';padding:6px;font-size:12px;cursor:pointer">'+l+'</button>'}).join('')
      +'</div>'
      +'<label style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin-bottom:8px;cursor:pointer;font-size:12px"><span>ניגודיות גבוהה</span><input type="checkbox" id="a11y-hc" '+(s.highContrast?'checked':'')+' style="width:16px;height:16px"></label>'
      +'<label style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin-bottom:8px;cursor:pointer;font-size:12px"><span>סימון קישורים</span><input type="checkbox" id="a11y-hl" '+(s.highlightLinks?'checked':'')+' style="width:16px;height:16px"></label>'
      +'<button id="a11y-reset" style="width:100%;border:1px solid var(--border);border-radius:6px;padding:6px;font-size:12px;background:transparent;cursor:pointer">איפוס הגדרות</button>';
    panel.querySelector('#a11y-close').onclick=function(){panel.style.display='none'};
    panel.querySelectorAll('[data-fs]').forEach(function(b){b.onclick=function(){s.fontSize=+b.dataset.fs;apply(s);save(s);render()}});
    panel.querySelector('#a11y-hc').onchange=function(e){s.highContrast=e.target.checked;apply(s);save(s);render()};
    panel.querySelector('#a11y-hl').onchange=function(e){s.highlightLinks=e.target.checked;apply(s);save(s);render()};
    panel.querySelector('#a11y-reset').onclick=function(){s=Object.assign({},defaults);apply(s);save(s);render()};
  }

  btn.onclick=function(){
    var vis=panel.style.display==='none';
    panel.style.display=vis?'block':'none';
    if(vis)render();
  };

  wrap.appendChild(panel);
  wrap.appendChild(btn);
  document.body.appendChild(wrap);
})();
`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { name: "description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
      { name: "author", content: "מיכל זיו" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { name: "twitter:title", content: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { property: "og:description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
      { name: "twitter:description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script dangerouslySetInnerHTML={{ __html: a11yScript }} />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
