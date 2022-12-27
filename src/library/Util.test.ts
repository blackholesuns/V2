import { describe, it, expect } from 'vitest';
import { capitalizeFirstLetter } from './util';



describe("Captialize First Letter", () => {

	it("Doesn't change numbers", () => {
		expect(capitalizeFirstLetter("4321")).toBe("4321");
	});

	it("Captializes first letter", () => {
		expect(capitalizeFirstLetter("test")).toBe("Test");
	});

	it("Lowercases all other letters", () => {
		expect(capitalizeFirstLetter("tEST")).toBe("Test");
	});
	
	it("Doesn't Capitalize overriden value", () => {
		expect(capitalizeFirstLetter("tEST", false)).toBe("TEST");
	});
});
