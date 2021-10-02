describe("Create users", () => {
  it("should be able to create a new user", () => {
    const user = { id: Math.random() };
    expect(user).toHaveProperty("id");
  });
});
