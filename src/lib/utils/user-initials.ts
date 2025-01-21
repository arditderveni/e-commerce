function userInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("");
}

export default userInitials;
