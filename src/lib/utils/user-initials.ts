/**
 * Generates the initials from a given full name.
 *
 * @param name - The full name of the user.
 * @returns The initials of the user.
 */
function userInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("");
}

export default userInitials;
