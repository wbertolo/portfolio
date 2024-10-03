import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import Card from './ui/card';
import invoices from './lib/placeholder-data.ts';

export default function Home() {
  return (
    <div>
      <main className="">
      <h1>William Bertolo's Portfolio</h1>
        <div className="tiles flex flex-col lg:flex-row justify-between">
          <Card
            title="Follow This Light"
            description="A musician personal site website"
            imgSrc="/images/followthislight.jpg"
            href="https://followthislight.com/"
          />
          <Card
            title="Freshbooks"
            description="Online Accounting Platform"
            imgSrc="/images/freshbooks.jpg"
            href="https://freshbooks.com/"
          />
          <Card
            title="Tempo"
            description="Corus Entertainment custom solutions"
            imgSrc="/images/tempo.jpg"
            href="https://tempo.corusent.com/"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Copyright 2024, William Bertolo
      </footer>
    </div>
  );
}
