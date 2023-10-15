export interface ServerComponentProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
