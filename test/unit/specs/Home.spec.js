import Vue from "vue";
import Home from "@/components/Home";

describe("Home.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Home);
    const HomeComponent = new Constructor().$mount();
    expect(HomeComponent.$el.querySelector(".hello h1").textContent).to.equal(
      "Welcome to Your Vue.js App"
    );
    expect(HomeComponent.$el.querySelector(".logo").textContent).to.equal(
      "Whether?"
    );
  });
  it("should have appropriate methods", () => {
    const Constructor = Vue.extend(Home);
    const HomeComponent = new Constructor().$mount();
    expect(typeof HomeComponent.methods.handleCitySearch).toBe("function");
  });
  it("sets the correct default data", () => {
    const Constructor = Vue.extend(Home);
    const HomeComponent = new Constructor().$mount();
    expect(typeof HomeComponent.data).toBe("function");
    const defaultData = HomeComponent.data();
    expect(defaultData.message).toBe("Weather details all around you!");
    expect(defaultData.error).toBe("");
    expect(defaultData.weatherData).toBe("");
    expect(defaultData.loading).toBe(false);
  });
});
