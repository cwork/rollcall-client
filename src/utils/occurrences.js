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

export const markActive = occurrences => {
  const today = new Date();
  const sortedOccurrences = sortByDate(occurrences);
  const allOccurrences = [];

  const coveredOccurrences = sortedOccurrences
    .filter(occurrence => occurrence.isCovered)
    .map(occurrence => ({ ...occurrence, isActive: false }));

  const nonCoveredOccurrences = sortedOccurrences.filter(
    occurrence => !occurrence.isCovered
  );

  nonCoveredOccurrences.forEach((occurrence, i) => {
    let dateOf; // get the current occurrence date
    let diff; // difference between today and current occurrence date
    let consecDiff; // difference between current occurrence date and next occurrence date

    if (i === nonCoveredOccurrences.length - 1) {
      dateOf = new Date(occurrence.dateOf);
      diff = (today - dateOf) / (1000 * 60 * 60 * 24);
    } else {
      dateOf = new Date(occurrence.dateOf);
      diff = (today - dateOf) / (1000 * 60 * 60 * 24);
      consecDiff =
        (dateOf - new Date(nonCoveredOccurrences[i + 1].dateOf)) /
        (1000 * 60 * 60 * 24);
    }
    if (diff > 364 || consecDiff < 2) {
      allOccurrences.push({ ...occurrence, isActive: false });
    } else {
      allOccurrences.push({ ...occurrence, isActive: true });
    }
  });
  return sortByDate(allOccurrences.concat(coveredOccurrences));
};
