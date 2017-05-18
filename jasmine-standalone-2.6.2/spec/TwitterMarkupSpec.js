describe("TwitterMarkup", function() {

	it("should markup links", function() {
		var element = document.createElement("li");
		element.innerHTML = "https://t.co/fjSnNgyYGj";
		TwitterMarkup.transform(element)
		expect(element.innerHTML).toBe("<a href=\"https://t.co/fjSnNgyYGj\" target=\"_blank\">https://t.co/fjSnNgyYGj</a>");
	});
	
	it("should markup hashtags", function() {
		var element = document.createElement("li");
		element.innerHTML = "#Joomla";
		TwitterMarkup.transform(element)
		expect(element.innerHTML).toBe("<a href=\"http://twitter.com/search?q=%23Joomla\" target=\"_blank\">#Joomla</a>");
	});
	
	it("should markup usernames", function() {
		var element = document.createElement("li");
		element.innerHTML = "@GeoffreyHayward";
		TwitterMarkup.transform(element)
		expect(element.innerHTML).toBe("<a href=\"http://twitter.com/GeoffreyHayward\" target=\"_blank\">@GeoffreyHayward</a>");
	});
	
	it("should not change other strings", function() {
		var element = document.createElement("li");
		element.innerHTML = "This is just a test.";
		TwitterMarkup.transform(element)
		expect(element.innerHTML).toBe("This is just a test.");
	});

  
});
