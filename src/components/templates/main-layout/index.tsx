// @packages
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// @scripts
import Footer from "components/molecules/footer";
import Header from "components/molecules/header";
import { Banner } from "src/components/atoms/banner";
import { CardItems } from 'src/components/atoms/card/card-items';

type TemplateProps = {
  children: JSX.Element;
};

type ArtistInfoProps = {
  id: string;
  imageUrl: string;
}

type TicketsInfoProps = {
  id: string;
  length: number;
}

export default function Layout({ children }: TemplateProps) {
  const [artistInfo, setArtistInfo] = useState<ArtistInfoProps>([] as any);
  const [defaultBanner, setDefaultBanner] = useState("/assets/images/banner.jpeg");
  const [ticketsInfo, setTicketsInfo] = useState<TicketsInfoProps>([] as any);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const ticketsInfoMap = CardItems.map(item => item?.events?.filter(event => event?.eventId === id));
      const ticketsInfoFilter = ticketsInfoMap.filter(item => item?.length > 0);
      const ticketsArray = ticketsInfoFilter.flat();
      setTicketsInfo(ticketsArray[0] as any);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const cardInfoFilter = CardItems.filter(item => item.id === id);
      setArtistInfo(cardInfoFilter[0] as any);
    }
    if (ticketsInfo?.id) {
      const eventsInfoMap = CardItems.filter(item => item?.id === ticketsInfo?.id);
      setArtistInfo(eventsInfoMap[0] as any);
    }

    if (!id && !ticketsInfo?.length) {
      setArtistInfo([] as any);
    }
  }, [id, ticketsInfo]);

  useEffect(() => {
    if (artistInfo?.imageUrl) {
      setDefaultBanner(artistInfo?.imageUrl);
    } else {
      setDefaultBanner("/assets/images/banner.jpeg");
    }
  }, [artistInfo]);

  return (
    <>
      <Header />
      <Banner image={defaultBanner}/>
      <div className="mt-5 mb-5">
        {children}
      </div>
      <Footer />
    </>
  );
}
