import { menu } from "@/data/menu";

export const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Menu</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Baked breakfast, made fresh</h2>
          <p className="text-muted-foreground">Everything on our menu is crafted with care — bakes, sweets, and classics.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {menu.map((section) => (
            <article
              key={section.title}
              className="bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-warm transition-shadow"
            >
              <header className="mb-5 pb-4 border-b border-border">
                <h3 className="font-display font-bold text-2xl text-primary">{section.title}</h3>
                {section.subtitle && (
                  <p className="text-sm text-muted-foreground mt-1.5 italic">{section.subtitle}</p>
                )}
              </header>
              <ul className={section.items.every((i) => !i.price && !i.description) ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-4"}>
                {section.items.map((item) => (
                  <li key={item.name} className="flex justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{item.name}</div>
                      {item.description && (
                        <div className="text-sm text-muted-foreground mt-0.5">{item.description}</div>
                      )}
                    </div>
                    {item.price && (
                      <div className="font-display font-bold text-secondary whitespace-nowrap">{item.price}</div>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-10 max-w-2xl mx-auto">
          *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase
          your risk of foodborne illness, especially if you have certain medical conditions.
        </p>
      </div>
    </section>
  );
};