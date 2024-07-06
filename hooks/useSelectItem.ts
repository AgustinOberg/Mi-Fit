import { useCallback, useMemo, useState } from 'react';
// https://gist.github.com/AgustinOberg/3984b7466224a47f9148f3635c6ee36f
export const useSelectItem = <T>() => {
  const [selectedElements, setSelectedElements] = useState<Set<T>>(new Set());

  const selectElement = useCallback((element: T) => {
    setSelectedElements((prevElements) => {
      const newSet = new Set(prevElements);
      if (newSet.has(element)) {
        newSet.delete(element);
      } else {
        newSet.add(element);
      }
      return newSet;
    });
  }, []);

  const selectedElementsArray = useMemo(
    () => Array.from(selectedElements),
    [selectedElements]
  );

  return {
    selectedElements: selectedElementsArray,
    selectElement,
  };
};
