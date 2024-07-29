import type { Schema, Attribute } from '@strapi/strapi';

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
      'our-stores-item.our-stores-item': OurStoresItemOurStoresItem;
      'our-stores.our-stores': OurStoresOurStores;
      'our-team-item.our-team-item': OurTeamItemOurTeamItem;
      'our-team.our-team': OurTeamOurTeam;
      'who-we-are.who-we-are': WhoWeAreWhoWeAre;
    }
  }
}
