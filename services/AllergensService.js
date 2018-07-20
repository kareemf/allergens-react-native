//TODO: implement storage
export default class AllergensService {
  static get() {
    return Promise.resolve({
      data: [{
        name: "hi",
      }]
    });
  }
}
