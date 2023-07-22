import { describe, it, expect } from 'vitest';
import { CapitalizeFirstLetter } from './Util';



describe("Captialize First Letter", () => {

	it("Doesn't change numbers", () => {
		expect(CapitalizeFirstLetter("4321")).toBe("4321");
	});

	it("Captializes first letter", () => {
		expect(CapitalizeFirstLetter("test")).toBe("Test");
	});

	it("Lowercases all other letters", () => {
		expect(CapitalizeFirstLetter("tEST")).toBe("Test");
	});
	
	it("Doesn't Capitalize overriden value", () => {
		expect(CapitalizeFirstLetter("tEST", false)).toBe("TEST");
	});
});
