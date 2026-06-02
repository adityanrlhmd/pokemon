import { PokemonDetail } from '@/components/pokemon/pokemon-detail';

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PokemonDetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  return <PokemonDetail idOrName={id} />;
}
