type Tag = {
  title: string;
  count: number;
};

export function ejectTags(allTags: Tag[], currentTags: string[]) {
  if (!currentTags || currentTags.length <= 0) {
    return allTags;
  }

  currentTags.forEach((currentTag: string) => {
    const duplicateTag =
      allTags.length > 0
        ? allTags.findIndex((tag: Tag) => tag.title === currentTag)
        : -1;

    if (duplicateTag !== -1) {
      allTags[duplicateTag].count += 1;
    } else {
      allTags.push({ title: currentTag, count: 1 });
    }
  });

  return allTags;
}
