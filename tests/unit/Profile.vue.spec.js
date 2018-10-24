import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

import Profile from "@/views/Profile.vue";


const localVue = createLocalVue();
localVue.use(Vuex);

describe("Profile.vue", () => {
  let store, wrapper;

  const getForms = (w = wrapper) => w.findAll("form");
  const getInputs = (w = wrapper) => w.findAll("input");

  describe("when the user is brand new", () => {
    beforeEach(() => {
      store = new Vuex.Store({
        state: {
          steps: [ 1, 2, 3 ],
          user: givenUserProfileWithoutAuditionData()
        }
      });
      wrapper = shallowMount(Profile, { 
        store, 
        localVue,
        stubs: ["el-container", "el-header", "el-main", "el-row", "el-col", "el-footer"]
      });
    });

    describe('and left ear audition is rendered', () => {
      it("should render empty input fields under the form", () => {
        const inputs = getInputs(getForms().at(1));
        expect(inputs.length).toBe(3);

        for(let i=0; i<inputs.length; i++) {
          expectInputToBeAudiogramInput(inputs.at(i), "l", "", i+1, i+11);
        } 
      });
    });

    describe('and right ear audition is rendered', () => {
      it("should render empty input fields under the form", () => {
        const inputs = getInputs(getForms().at(0));
        expect(inputs.length).toBe(3);

        for(let i=0; i<inputs.length; i++) {
          expectInputToBeAudiogramInput(inputs.at(i), "r", "", i+1, i+1);
        } 
      });
    });
  }); 

  describe("when the user is a returning user", () => {
    beforeEach(() => {
      store = new Vuex.Store({
        state: {
          steps: [ 1, 2, 3 ],
          user: givenUserProfileWithAuditionData()
        }
      });
      wrapper = shallowMount(Profile, { 
        store, 
        localVue,
        stubs: ["el-container", "el-header", "el-main", "el-row", "el-col", "el-footer"]
      });
    });

    describe('and left ear audition is rendered', () => {
      it("should render input fields with their value under the form", () => {
        const inputs = getInputs(getForms().at(1));
        expect(inputs.length).toBe(3);

        expectInputToBeAudiogramInput(inputs.at(0), "l",  "250", 1, 11);
        expectInputToBeAudiogramInput(inputs.at(1), "l",  "500", 2, 12);
        expectInputToBeAudiogramInput(inputs.at(2), "l", "1000", 3, 13);
      });
    });

    describe('and right ear audition is rendered', () => {
      it("should render input fields with their value under the form", () => {
        const inputs = getInputs(getForms().at(0));
        expect(inputs.length).toBe(3);

        expectInputToBeAudiogramInput(inputs.at(0), "r", "400", 1, 1);
        expectInputToBeAudiogramInput(inputs.at(1), "r", "600", 2, 2);
        expectInputToBeAudiogramInput(inputs.at(2), "r", "800", 3, 3);
      });
    });
  }); 

  const expectInputToBeAudiogramInput = (input, side, value, step, tabIndex) => {
    expect(input.element.getAttribute("type")).toBe("number");
    expect(input.element.getAttribute("name")).toBe(`${side}${step}`);
    expect(input.element.getAttribute("placeholder")).toBeDefined();
    expect(input.element.getAttribute("tabIndex")).toBe(`${tabIndex}`);
    expect(input.element.value).toBe(value);
  }

  const givenUserProfileWithoutAuditionData = () => {
    return {
      profile: {
        audition: {
          left: {},
          right: {}
        }
      }
    };
  };

  const givenUserProfileWithAuditionData = () => {
    return {
      profile: {
        audition: {
          left: { 1: 250, 2: 500, 3: 1000 },
          right: { 1: 400, 2: 600, 3: 800 }
        }
      }
    };
  };
});
