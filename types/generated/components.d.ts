import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FullSpecificationsFullSpecifications extends Schema.Component {
  collectionName: 'components_full_specifications_full_specifications';
  info: {
    displayName: 'full-specifications';
    description: '';
  };
  attributes: {
    general: Attribute.Component<'general-features.general-features', true>;
    details: Attribute.Component<'general-details.general-details', true>;
  };
}

export interface GeneralDetailsGeneralDetails extends Schema.Component {
  collectionName: 'components_general_details_general_details';
  info: {
    displayName: 'general-details';
    description: '';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
  };
}

export interface GeneralFeaturesGeneralFeatures extends Schema.Component {
  collectionName: 'components_general_features_general_features';
  info: {
    displayName: 'general-features';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface GeneralParamsGeneralParams extends Schema.Component {
  collectionName: 'components_general_params_general_params';
  info: {
    displayName: 'generalParams';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OurStoresItemOurStoresItem extends Schema.Component {
  collectionName: 'components_our_stores_item_our_stores_items';
  info: {
    displayName: 'OurStoresItem';
    description: '';
  };
  attributes: {
    address: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface OurStoresOurStores extends Schema.Component {
  collectionName: 'components_our_stores_our_stores';
  info: {
    displayName: 'OurStores';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    OurStoresItem: Attribute.Component<'our-stores-item.our-stores-item', true>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface OurTeamItemOurTeamItem extends Schema.Component {
  collectionName: 'components_our_team_item_our_team_items';
  info: {
    displayName: 'ourTeamItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media<'images'>;
  };
}

export interface OurTeamOurTeam extends Schema.Component {
  collectionName: 'components_our_team_our_teams';
  info: {
    displayName: 'OurTeam';
    description: '';
  };
  attributes: {
    ourTeamItem: Attribute.Component<'our-team-item.our-team-item', true>;
  };
}

export interface PortfolioPortfolio extends Schema.Component {
  collectionName: 'components_portfolio_portfolios';
  info: {
    displayName: 'Portfolio';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ProductFaqProductFaq extends Schema.Component {
  collectionName: 'components_product_faq_product_faqs';
  info: {
    displayName: 'product-faq';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.Text;
  };
}

export interface ProductTypesProductTypes extends Schema.Component {
  collectionName: 'components_product_types_product_types';
  info: {
    displayName: 'product-types';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface WhoWeAreWhoWeAre extends Schema.Component {
  collectionName: 'components_who_we_are_who_we_ares';
  info: {
    displayName: 'WhoWeAre';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.category': CategoryCategory;
      'full-specifications.full-specifications': FullSpecificationsFullSpecifications;
      'general-details.general-details': GeneralDetailsGeneralDetails;
      'general-features.general-features': GeneralFeaturesGeneralFeatures;
      'general-params.general-params': GeneralParamsGeneralParams;
      'our-stores-item.our-stores-item': OurStoresItemOurStoresItem;
      'our-stores.our-stores': OurStoresOurStores;
      'our-team-item.our-team-item': OurTeamItemOurTeamItem;
      'our-team.our-team': OurTeamOurTeam;
      'portfolio.portfolio': PortfolioPortfolio;
      'product-faq.product-faq': ProductFaqProductFaq;
      'product-types.product-types': ProductTypesProductTypes;
      'who-we-are.who-we-are': WhoWeAreWhoWeAre;
    }
  }
}
