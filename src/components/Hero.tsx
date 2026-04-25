import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/30 text-foreground text-xs font-semibold tracking-wide uppercase">
            Breakfast & Brunch
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] text-foreground">
            Seester's <span className="text-primary">+ One</span>
            <br />
            <span className="text-secondary">Breakfast Shop</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto text-center">
          Right here in Conneaut, OH. Serving up fresh, baked breakfasts worth waking up for.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
            <a href="#menu" className="px-7 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-warm hover:scale-105 transition-transform">
              See the Menu
            </a>
            <a href="#visit" className="px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Visit Us
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 bg-gradient-warm opacity-20 blur-3xl rounded-full" />
          <img
            src={logo}
            alt="Seester's Plus One Breakfast Shop logo"
            width={720}
            height={720}
            className="relative w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};