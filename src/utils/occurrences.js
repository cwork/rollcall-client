export const formatDate = strDate => {
  const date = new Date(strDate);
  return date.toLocaleDateString(0, {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit'
  });
};

export const sortByDate = occurrences => {
  return occurrences.sort((a, b) => new Date(b.dateOf) - new Date(a.dateOf));
};
