import { useEffect, useState } from 'react';
import { fetchTasks } from '../api';

export function useTasks(query, status, page, pageSize) {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetchTasks({
      query,
      status,
      page,
      pageSize
    })
      .then((data) => {
        if (cancelled) {
          return;
        }

        setTasks(data.items || []);
        setTotal(data.total || 0);
      })
      .catch((err) => {
        if (cancelled) {
          return;
        }

        setTasks([]);
        setTotal(0);
        setError(err?.message || 'Failed to load tasks');
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [query, status, page, pageSize]);

  return {
    tasks,
    total,
    loading,
    error
  };
}
