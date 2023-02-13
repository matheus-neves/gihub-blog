import { Profile } from '@components/Profile';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@src/components/Card';
import { CardSkeleton } from '@src/components/Card/components/CardSkeleton';
import { queryClient } from '@src/lib/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import * as z from 'zod';
import { fetchIssues } from './utils';

const validationSchema = z.object({
  query: z.string().max(256)
});
type ValidationSchema = z.infer<typeof validationSchema>;

export function Home() {
  const { register, handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema)
  });

  const { data, mutate, reset, isLoading } = useMutation({
    mutationKey: ['issues'],
    mutationFn: fetchIssues,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
    }
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    const { query } = data;

    if (!query) {
      return reset();
    }

    mutate({
      query
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Profile />

      <header className="flex flex-col gap-12 mt-[72px]">
        <div>
          <div className="flex flex-row justify-between items-center mb-3">
            <h2 className="text-lg text-primary-base-subtitle">Posts</h2>
            <span className="text-sm text-primary-base-span">
              {data?.length || 0} posts
            </span>
          </div>
          <input
            className="
              w-full
              h-[50px]
              py-3
              px-4
              bg-primary-base-input
              outline-1
              outline
              outline-primary-base-border
              border-0
              rounded-md

              text-primary-base-text
              text-base

              placeholder:text-primary-base-label
              focus:outline-primary-blue
            "
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {isLoading && (
            <>
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}

          {data?.map((item) => (
            <Link to={`/post/${item.number}`} key={item.number}>
              <Card>
                <Card.Header
                  title={item.title}
                  created_at={item.created_at}
                  date={item.formattedRelativeTime}
                />
                <Card.Description>{item.formattedBody}</Card.Description>
              </Card>
            </Link>
          ))}
        </div>
      </header>
    </form>
  );
}
