import { useCallback, useState } from 'react';

interface UseCSVFileUploadResult {
  selectFile: () => void;
  data: number[] | null;
  error: string | null;
}

const useCSVFileUpload = (): UseCSVFileUploadResult => {
  const [data, setData] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectFile = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';

    input.onchange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        if (!file.name.endsWith('.csv')) {
          setError('Selected file is not a CSV file');
          setData(null);
          return;
        }

        try {
          const text = await file.text();
          const lines = text.split('\n');
          const result: number[] = lines.flatMap((line) =>
            line.split(',').map((value) => {
              const num = parseFloat(value.trim());
              if (isNaN(num)) throw new Error('Invalid CSV format');
              return num;
            })
          );

          setData(result);
          setError(null);
        } catch (err) {
          setError((err as Error).message);
          setData(null);
        }
      }
    };

    input.click();
  }, []);

  return { selectFile, data, error };
};

export default useCSVFileUpload;
