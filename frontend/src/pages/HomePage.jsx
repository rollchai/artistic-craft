import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { Button, Card, Badge } from '../components/ui';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-badge">🌿 Handcrafted with Soul</div>
        <h1 className="hero-title">
          Unique Handmade Art & Crafts from Master Artisans
        </h1>
        <p className="hero-description">
          Discover authentic pottery, paintings, wood carvings, textiles, and commission custom artwork directly from independent creators.
        </p>
        <div className="hero-cta-group">
          <Link to={ROUTES.PRODUCTS}>
            <Button size="lg" variant="primary">
              Explore Collections ✨
            </Button>
          </Link>
          <Link to={ROUTES.CUSTOM_ARTWORK}>
            <Button size="lg" variant="outline">
              Commission Custom Art
            </Button>
          </Link>
        </div>
      </section>

      <section className="featured-categories">
        <div className="section-header">
          <h2>Popular Categories</h2>
          <Link to={ROUTES.CATEGORIES} className="view-all-link">View all &rarr;</Link>
        </div>
        <div className="categories-grid">
          {[
            { id: 'pottery', name: 'Pottery & Ceramics', count: '120+ pieces', emoji: '🏺' },
            { id: 'paintings', name: 'Canvas & Oil Art', count: '95+ pieces', emoji: '🎨' },
            { id: 'woodwork', name: 'Wood Sculptures', count: '64+ pieces', emoji: '🪵' },
            { id: 'jewelry', name: 'Handmade Jewelry', count: '180+ pieces', emoji: '💍' },
          ].map((cat) => (
            <Card key={cat.id} className="category-card">
              <span className="cat-icon">{cat.emoji}</span>
              <h3>{cat.name}</h3>
              <p>{cat.count}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
