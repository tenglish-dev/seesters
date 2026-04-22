import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10 rounded-full object-contain bg-white" width={40} height={40} loading="lazy" />
          <div>
            <div className="font-display font-bold">Seester's + One Breakfast Shop</div>
            <div className="text-xs opacity-70">Baked, never fried.</div>
          </div>
        </div>
        <p className="text-xs opacity-70">© {new Date().getFullYear()} Seester's Plus One Breakfast Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};