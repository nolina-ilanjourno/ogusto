import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems, categoryNames } from "../data/menuData";
import { MenuItem as MenuItemType } from "../types";
import "../styles/Menu.css";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Object.keys(categoryNames)] as const;

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const MenuItem = ({ item }: { item: MenuItemType }) => (
    <motion.div
      className="menu-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <div className="menu-item-header">
        <h3>{item.name}</h3>
        <span className="price">{item.price}€</span>
      </div>
      <p className="description">{item.description}</p>
    </motion.div>
  );

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Notre Menu</h1>
            <p>Découvrez nos spécialités italiennes casher</p>
            <a
              href="https://deliveroo.fr/en/menu/paris/ternes-maillot/o-gusto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ display: 'inline-block', marginTop: '20px', padding: '12px 30px', backgroundColor: '#00CCBC', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: '600' }}
            >
              Commander en ligne sur Deliveroo
            </a>
          </motion.div>
        </div>
      </section>

      <section className="menu-content section">
        <div className="container">
          {/* Category Filter */}
          <motion.div
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all"
                  ? "Tout"
                  : categoryNames[category as keyof typeof categoryNames]}
              </button>
            ))}
          </motion.div>

          {/* Menu Items by Category */}
          <div className="menu-sections">
            {selectedCategory === "all" ? (
              // Show all categories
              Object.keys(categoryNames).map((category) => {
                const items = menuItems.filter(
                  (item) => item.category === category
                );
                return (
                  <motion.div
                    key={category}
                    className="menu-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="category-title">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h2>
                    <div className="menu-items-grid">
                      {items.map((item) => (
                        <MenuItem key={item.id} item={item} />
                      ))}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              // Show selected category
              <motion.div
                className="menu-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="category-title">
                  {
                    categoryNames[
                      selectedCategory as keyof typeof categoryNames
                    ]
                  }
                </h2>
                <div className="menu-items-grid">
                  {filteredItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Info Section */}
          <motion.div
            className="menu-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card">
              <h3>Restaurant 100% Casher</h3>
              <p>
                Tous nos plats sont préparés dans le respect strict des lois de
                la cacherout. Notre restaurant est certifié casher et supervisé
                par une autorité rabbinique reconnue.
              </p>
            </div>
            <div className="info-card">
              <h3>Allergènes</h3>
              <p>
                Si vous avez des allergies ou des intolérances alimentaires,
                n'hésitez pas à en informer notre personnel. Nous ferons de
                notre mieux pour adapter nos plats.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
