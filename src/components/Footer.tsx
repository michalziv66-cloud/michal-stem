import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <img src={logo} alt="מיכל זיו" className="h-12 w-auto brightness-0 invert" />
          </div>
          <div>
            <h4 className="font-semibold">ניווט</h4>
            <div className="mt-2 flex flex-col gap-1.5">
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">אודות</Link>
              <Link to="/tools" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">כלים אינטראקטיביים</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">צור קשר</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">צור קשר</h4>
            <div className="mt-2 flex flex-col gap-1.5 text-sm text-primary-foreground/70">
              <span>michalziv66@gmail.com</span>
              <span dir="ltr">050-901-7802</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} מיכל זיו. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
