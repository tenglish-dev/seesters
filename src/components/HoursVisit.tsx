import { Clock, MapPin, Mail, UtensilsCrossed } from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "Closed" },
  { day: "Thursday", time: "Closed" },
  { day: "Friday", time: "Closed" },
  { day: "Saturday", time: "8am - 1pm" },
  { day: "Sunday", time: "8am - 1pm" },
];

export const HoursVisit = () => {
  return (
    <section id="hours" className="py-20 md:py-28">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8">
        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-warm text-primary-foreground">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-3xl">Hours</h2>
          </div>
          <ul className="divide-y divide-border">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between py-3">
                <span className="font-medium">{h.day}</span>
                <span className={h.time === "Closed" ? "text-muted-foreground" : "text-secondary font-semibold"}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Currently open weekends only. Hours subject to change — please reach out for the latest.
          </p>
        </div>

        <div id="visit" className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-warm text-primary-foreground">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-3xl">Visit Us</h2>
          </div>

          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Find us at</div>
                <p className="text-muted-foreground text-sm">
                  471 Madison Street<br />Parking drive located off Route 20
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Get in touch</div>
                <a href="mailto:seestersplusone@gmail.com" className="text-muted-foreground text-sm hover:text-primary">
                  seestersplusone@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <UtensilsCrossed className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Service options</div>
                <p className="text-muted-foreground text-sm">Dine-in • Takeout • Curbside pickup</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {["Breakfast", "Brunch", "Family Friendly", "$$"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-accent/30 text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};