const {
  isURL,
  getUrlProtocol,
  getTopLevelDomain,
  getSubdomain
} = require("../index");

describe("isURL", () => {
  test("should return false when no url is provided", () => {
    expect(isURL()).toBe(false);
  });

  test("should return false on 'https://hellocom'", () => {
    expect(isURL("https://hellocom")).toBe(false);
  });

  test("should return true on 'https://hello.com'", () => {
    expect(isURL("hello.com")).toBe(true);
  });
});

describe("getUrlProtocol", () => {
  test("should return false when no url is provided", () => {
    expect(getUrlProtocol()).toBe(false);
  });

  test("should return false when the string provided is not an valid url", () => {
    expect(getUrlProtocol("https://hellocom")).toBe(false);
  });

  test("should return an empty string when there is no protocol in this url", () => {
    expect(getUrlProtocol("hello.com")).toEqual("");
  });

  test("should return the protocol when url contains one (https)", () => {
    expect(getUrlProtocol("https://hello.com")).toEqual("https");
    expect(getUrlProtocol("https://google.com")).toEqual("https");
  });

  test("should return the protocol when url contains one (http)", () => {
    expect(getUrlProtocol("http://hello.com")).toEqual("http");
    expect(getUrlProtocol("http://google.com")).toEqual("http");
  });

  test("should return the protocol when url contains one (ftp)", () => {
    expect(getUrlProtocol("ftp://hello.com")).toEqual("ftp");
    expect(getUrlProtocol("ftp://google.com")).toEqual("ftp");
  });
});

describe("getTopLevelDomain", () => {
  test("should return false when no url is provided", () => {
    expect(getTopLevelDomain()).toBe(false);
  });

  test("should return false when the string provided is not an valid url", () => {
    expect(getTopLevelDomain("https://hellocom")).toBe(false);
  });

  test("should return top level domain if valid domain is provided", () => {
    expect(getUrlProtocol("hello.com")).toEqual("com");
    expect(getUrlProtocol("https://hello.com")).toEqual("com");
    expect(getUrlProtocol("http://hello.de")).toEqual("de");
    expect(getUrlProtocol("http://example.io")).toEqual("io");
    expect(getUrlProtocol("http://hello.berlin")).toEqual("berlin");
    expect(getUrlProtocol("http://sub.hello.de")).toEqual("de");
  });
});

describe("getSubdomain", () => {
  test("should return false when no url is provided", () => {
    expect(getUrlProtocol()).toBe(false);
  });

  test("should return false when the string provided is not an valid url", () => {
    expect(getUrlProtocol("https://www.hellocom")).toBe(false);
  });

  test("should return an empty string when there is no subdomain in this url", () => {
    expect(getUrlProtocol("https://hello.com")).toEqual("");
  });

  test("should return subdomain string when there is a subdomain in the url", () => {
    expect(getUrlProtocol("https://www.hello.com")).toEqual("www");
    expect(getUrlProtocol("https://discover.hello.com")).toEqual("discover");
    expect(getUrlProtocol("sub.hello.com")).toEqual("sub");
  });
});
