import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  
  async model() {
    return this.store.findAll('rental');
  }
}
// const COMMUNITY_CATEGORIES = [
//   'Condo',
//   'Townhouse',
//   'Apartment'
// ];
// export default class IndexRoute extends Route {
//   async model() {
//     let response = await fetch('/api/rentals.json');
//     // let parsed = await response.json();
//     // return parsed;
//      let { data } = await response.json();

//     return data.map(model => {
//       let { attributes, id } = model;
//       let type;

//       if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
//         type = 'Community';
//       } else {
//         type = 'Standalone';
//       }

//       return { id, type, ...attributes };
//     });
//   }
// }