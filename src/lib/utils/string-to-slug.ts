/**
 * Converts a given string to a URL-friendly slug.
 *
 * This function transforms the input string to lowercase, replaces spaces with hyphens,
 * and removes all non-alphanumeric characters except for hyphens.
 *
 * @param string - The input string to be converted to a slug.
 * @returns The URL-friendly slug.
 */
function stringToSlug(string: string) {
  return string
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export default stringToSlug;
