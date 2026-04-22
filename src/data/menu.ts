export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  note?: string;
};

export type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "Build Your Own Bake (Omelette)",
    subtitle: "Comes with toast and potato. Egg & Cheese Bake $9.00 — each additional topping $1.25",
    items: [
      { name: "Cheddar Cheese", price: "" },
      { name: "American Cheese", price: "" },
      { name: "Provolone Cheese", price: "" },
      { name: "Ham", price: "" },
      { name: "Bacon", price: "" },
      { name: "Sausage", price: "" },
      { name: "Mushroom", price: "" },
      { name: "Tomato", price: "" },
      { name: "Onion", price: "" },
      { name: "Bell Pepper", price: "" },
    ],
  },
  {
    title: "Specialty Bakes",
    items: [
      { name: "Biscuit and Gravy Bake", description: "Egg, Sausage Gravy, and Biscuit. Comes with potato.", price: "$13" },
      { name: "Irish Bake", description: "Egg, Cheddar Cheese, and Corn Beef Hash. Comes with potato and toast or biscuit.", price: "$14" },
      { name: "Steak Bake", description: "Egg, Steak, Green Pepper, Onion, and Mushroom. Comes with potato and toast or biscuit.", price: "$14" },
    ],
  },
  {
  title: "Senior Menu",
  items: [
    { name: "1 Biscuit and Sausage Gravy", price: "$3" },
    { name: "1 Egg and Toast or Biscuit", price: "$4" },
    { name: "2 Eggs and Toast or Biscuit", price: "$5" },
    { name: "1 Egg, 2 Bacon or Sausage (Link or Patty), and Toast or Biscuit", price: "$6" },
    { name: "A Sweet Choice plus Bacon or Sausage (Link or Patty)", price: "$7" },
  ],
},
  {
    title: "Breakfasts",
    items: [
      { name: "Super", description: "Egg, Bacon or Sausage (Link or Patty), and Toast or Biscuit.", price: "$9" },
      { name: "SuperDuper", description: "Egg, Bacon or Sausage, Potato, and Toast or Biscuit.", price: "$12" },
      { name: "SuperDeeeDuper", description: "Egg, Bacon or Sausage, Potato, Sweet Choice, and Toast or Biscuit.", price: "$14" },
      { name: "Corn Beef Hash", description: "Egg, Corn Beef Hash, and Toast or Biscuit.", price: "$11" },
      { name: "Bacon Breakfast Sandwich", description: "Made with Bacon, Egg, and Cheese. Comes with potato.", price: "$12" },
      { name: "Sausage Breakfast Sandwich", description: "Made with Sausage, Egg, and Cheese. Comes with potato.", price: "$12" },
      { name: "Biscuits and Gravy", description: "Egg, Biscuit, and Gravy.", price: "$12" },
    ],
  },
  {
    title: "Sweet Choice",
    subtitle: "Add Potato OR a choice of meat (bacon or sausage) OR Eggs for $3",
    items: [
      { name: "German Toast", description: "Texas Toast Dipped in Cinnamon Pancake Batter and Baked.", price: "$8" },
      { name: "French Toast", description: "Texas Toast Dipped in Cinnamon Egg and Baked.", price: "$8" },
      { name: "Kale Cakes", description: "Baked pancakes.", price: "$8" },
      { name: "Remi Cakes", description: "Double chocolate baked pancakes.", price: "$9" },
    ],
  },
  {
    title: "A La Cart",
    items: [
      { name: "Corn Beef Hash", price: "$5" },
      { name: "Biscuit and Gravy", price: "$5" },
      { name: "Bacon", price: "$4" },
      { name: "Sausage (Link or Patty)", price: "$4" },
      { name: "Pancake", price: "$4" },
      { name: "German Toast", price: "$4" },
      { name: "French Toast", price: "$4" },
      { name: "Oatmeal with Toast", price: "$5" },
    ],
  },
  {
    title: "Kids Breakfast",
    subtitle: "Includes drink — $6",
    items: [
      { name: "Eggs, Bacon or Sausage (Link or Patty), and Toast or Biscuit", price: "$6" },
      { name: "A Sweet Choice plus Bacon or Sausage (Link or Patty)", price: "$6" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Coffee, Tea, Hot Chocolate, Soft Drink (can)", price: "$3" },
      { name: "Milk (Plain, Chocolate, or Strawberry)", price: "Small $3 / Large $5" },
      { name: "Juice (Orange or Apple)", price: "Small $3 / Large $5" },
    ],
  },
  {
    title: "Senior Menu",
    items: [
      { name: "1 Biscuit and Sausage Gravy", price: "$3" },
      { name: "1 Egg and Toast or Biscuit", price: "$4" },
      { name: "2 Eggs and Toast or Biscuit", price: "$5" },
      { name: "1 Egg, 2 Bacon or Sausage (Link or Patty), and Toast or Biscuit", price: "$6" },
      { name: "A Sweet Choice plus Bacon or Sausage (Link or Patty)", price: "$7" },
    ],
  },
];