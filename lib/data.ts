// ──────────────────────────────────────────────────────────────────────────
// Jedno źródło prawdy dla całej oferty. Edytuj treści tutaj.
// ──────────────────────────────────────────────────────────────────────────

export type Accent = "brand" | "gold";

export interface PainPoint {
  title: string;
  description: string;
}

export interface Step {
  /** Numer kroku (1-based) */
  index: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  text: string;
}

export interface PackageBenefit {
  title: string;
  text: string;
}

export interface Package {
  id: string;
  tier: 1 | 2;
  name: string;
  /** Krótkie pozycjonowanie pod nagłówkiem */
  tagline: string;
  price: string;
  priceNote?: string;
  /** Czas realizacji — pokazany na karcie i w szczegółach */
  timeline: string;
  /** Główny cel pakietu — jedno zdanie (tylko w szczegółach) */
  goal: string;
  /** Punkty na karcie (skrót) */
  highlights: string[];
  /** Opcjonalny nagłówek listy: „Wszystko z poprzedniego pakietu, plus:” */
  buildsOn?: string;
  /** Pełny zakres w modalu */
  scope: string[];
  /** Co realnie zyskuje Wielki Format — atuty pakietu */
  supports: PackageBenefit[];
  /** Krótki opis efektu (na karcie) */
  effect: string;
  accent: Accent;
}

// ── Problem ────────────────────────────────────────────────────────────────

export const PAIN_POINTS: PainPoint[] = [
  {
    title: "Oferta składana ręcznie",
    description:
      "Przy każdym zapytaniu ktoś zestawia listę nośników. To kilka minut — ale wraca przy każdym kliencie, codziennie.",
  },
  {
    title: "Lead na kartce albo w mailu",
    description:
      "Raz notatka po telefonie, raz mail, raz SMS. Zanim trafi do bazy, łatwo coś przeoczyć albo zgubić.",
  },
  {
    title: "Każdy lead przepisywany ręcznie",
    description:
      "Dane z różnych miejsc trzeba ręcznie przenosić do bazy. Powtarzalna, żmudna robota przy każdym kontakcie.",
  },
];

export const PAIN_CONCLUSION = {
  title: "Wniosek",
  description:
    "To da się uporządkować. Klient sam składa listę nośników, a Wy dostajecie komplet zapytań w jednym miejscu i w jednym formacie — gotowy do przeniesienia do Waszej bazy. A jeśli baza pozwala wgrać plik, to już zupełnie chwila.",
};

// ── Jak to działa ────────────────────────────────────────────────────────────

export const STEPS: Step[] = [
  {
    index: 1,
    title: "Zawsze aktualna lista nośników",
    description:
      "Oferta nośników na stronie odświeża się sama. To, co widzi klient, jest aktualne — bez Waszej ręcznej pracy.",
  },
  {
    index: 2,
    title: "Koszyk na liście nośników",
    description:
      "Odwiedzający zaznacza interesujące go nośniki i dodaje je do koszyka — tak jak w sklepie internetowym.",
  },
  {
    index: 3,
    title: "Zapytanie jednym kliknięciem",
    description:
      "Wypełnia krótki formularz — imię, telefon, e-mail, termin i opis — i wysyła całą listę naraz.",
  },
  {
    index: 4,
    title: "Gotowy lead u Was",
    description:
      "Dostajecie komplet: listę nośników i dane kontaktowe. Każde zapytanie to lead gotowy do rozmowy.",
  },
];

export const AVAILABILITY_NOTE = {
  title: "Co z dostępnością na żywo?",
  description:
    "Część nośników w bazie należy do innych operatorów i agencji, dlatego nie pokazujemy dostępności w czasie rzeczywistym — to byłoby mylące dla klienta. To zapytanie o dostępność i wycenę: szybkie i konkretne dla klienta, a ostateczne potwierdzenie zostaje po Waszej stronie.",
};

// ── Korzyści ─────────────────────────────────────────────────────────────────

export const BENEFITS: Benefit[] = [
  {
    title: "Oszczędność czasu",
    text: "Klient sam składa listę nośników. Wy zaczynacie od gotowego zapytania, nie od zera.",
  },
  {
    title: "Każdy lead zapisany",
    text: "Nawet jeśli ktoś teraz nie wynajmie — wiecie, że pytał. Jest do kogo wrócić z propozycją.",
  },
  {
    title: "Wszystko w jednym miejscu",
    text: "Koniec kartek, SMS-ów i maili w różnych skrzynkach. Jeden format, gotowy do przeniesienia do bazy.",
  },
  {
    title: "Działa całą dobę",
    text: "Zapytania spływają też po godzinach, w weekendy i święta — bez Waszego udziału.",
  },
];

// ── Pakiety ──────────────────────────────────────────────────────────────────

export const PACKAGES: Package[] = [
  {
    id: "koszyk",
    tier: 1,
    name: "Koszyk i zapytania",
    tagline: "Rozwiązuje problem — koniec ręcznego układania ofert",
    price: "7 000 zł",
    priceNote: "jednorazowo, netto",
    timeline: "~30 dni",
    goal: "Odwiedzający sam składa listę nośników i wysyła gotowe zapytanie o dostępność i wycenę.",
    highlights: [
      "Zawsze aktualna lista nośników",
      "Koszyk: klient zaznacza nośniki i widzi swoją listę",
      "Formularz: imię, telefon, e-mail, termin, opis",
      "Zapytanie mailem + potwierdzenie dla klienta",
    ],
    scope: [
      "Lista nośników na stronie zawsze aktualna — odświeża się sama, bez ręcznej pracy po Waszej stronie",
      "Koszyk na liście nośników: klient zaznacza nośniki, widzi licznik i swoją listę",
      "Formularz zapytania: imię, telefon, e-mail (wymagane), termin kampanii i krótki opis (opcjonalnie)",
      "Po wysłaniu: zapytanie z listą nośników trafia do Was mailem, a klient dostaje automatyczne potwierdzenie z podsumowaniem",
      "Zgody i zabezpieczenie formularza spójne z resztą Waszej strony",
      "Dopasowanie do telefonów i tabletów, testy i wdrożenie",
    ],
    supports: [
      {
        title: "Koniec ręcznej roboty przy ofercie",
        text: "Klient sam zestawia nośniki — zamiast Was przy każdym telefonie. Ten czas wraca każdego dnia, przy każdym zapytaniu.",
      },
      {
        title: "Każde zapytanie z kompletem danych",
        text: "Imię, telefon, mail i lista nośników w jednym, czytelnym formacie. Nie trzeba niczego dopytywać ani szukać.",
      },
      {
        title: "Strona pracuje, gdy Wy nie",
        text: "Zapytania spływają też wieczorami, w weekendy i święta — bez Waszego udziału. Żaden zainteresowany nie odbija się od zamkniętych drzwi.",
      },
    ],
    effect: "Klient sam składa listę. Wy zaczynacie od gotowego zapytania.",
    accent: "brand",
  },
  {
    id: "koszyk-plus",
    tier: 2,
    name: "Koszyk i zapytania — rozszerzony",
    tagline: "Dopracowany system, który zdejmuje pracę z każdego etapu",
    price: "13 000 zł",
    priceNote: "jednorazowo, netto",
    timeline: "ekspres — poniżej 10 dni roboczych",
    goal: "Kompletny system zapytań: klient wygodnie składa i udostępnia listę nośników, a Wy dostajecie leady poukładane w jednym pliku — gotowe do bazy i do follow-upu.",
    buildsOn: "Wszystko z Pakietu 1, plus:",
    highlights: [
      "Ekspres — wdrożenie poniżej 10 dni roboczych",
      "Udostępnianie koszyka linkiem — łatwiej domknąć decyzję",
      "Oferta w PDF — gotowy dokument do wysłania",
      "Wszystkie leady w jednym pliku — gotowe do bazy",
      "Rozbudowany, intuicyjny koszyk z podglądami nośników",
      "Brandowany e-mail zapytania + firmowa autoodpowiedź",
      "Lista nośników odświeżana częściej",
    ],
    scope: [
      "Ekspresowe wdrożenie — poniżej 10 dni roboczych. Priorytet, żeby system zaczął przynosić zapytania jak najszybciej.",
      "Udostępnianie koszyka linkiem. Klient wysyła swoją listę nośników jednym linkiem — współpracownikowi, przełożonemu, znajomemu. Osoby, które wspólnie decydują o kampanii, nie muszą niczego opisywać. Mniej tarcia po ich stronie to więcej domkniętych zapytań po Waszej.",
      "Oferta w PDF. Lista wybranych nośników jako gotowy, profesjonalny dokument — dla klientów, którzy wolą plik od linku. Można go od razu przesłać dalej.",
      "Wszystkie leady w jednym pliku (Excel / Google Sheets). Każde zapytanie ląduje w jednej tabeli z kompletem danych — koniec przepisywania z kartek i maili, wszystko gotowe do przeniesienia do Waszej bazy.",
      "Rozbudowany, intuicyjny koszyk — podglądy nośników, płynne działanie, łatwe dodawanie i usuwanie pozycji. Wygodniej się wybiera, więc klienci składają dłuższe listy.",
      "Brandowany e-mail zapytania z podglądami nośników i terminem kampanii oraz firmowa automatyczna odpowiedź. Pierwszy kontakt wygląda jak od dużego, poukładanego operatora.",
      "Lista nośników odświeżana częściej — klient zawsze widzi aktualną ofertę.",
      "Pełne testy (telefony, tablety, sytuacje brzegowe) i wdrożenie.",
    ],
    supports: [
      {
        title: "Szybko na rynku — poniżej 10 dni roboczych",
        text: "Priorytetowa realizacja: krócej czekacie, szybciej widać efekt. System zaczyna zbierać zapytania niemal od razu, a nie po miesiącu.",
      },
      {
        title: "Płynniejsza ścieżka = więcej zapytań",
        text: "Im mniej tarcia przy składaniu, udostępnianiu i wysyłaniu listy, tym więcej osób dokończy zapytanie zamiast porzucić je w połowie. Link i czytelny koszyk pracują na konwersję.",
      },
      {
        title: "Leady gotowe do działania",
        text: "Wszyscy zainteresowani w jednej tabeli, w jednym formacie. Zamiast przepisywać dane z kartek i maili, możecie od razu dzwonić i robić follow-up.",
      },
      {
        title: "Profesjonalny wizerunek na starcie",
        text: "Link, PDF i dopracowany e-mail sprawiają, że pierwszy kontakt wygląda jak od dużego, poukładanego operatora — to buduje zaufanie jeszcze przed rozmową o cenie.",
      },
    ],
    effect:
      "Mniej Waszej pracy na każdym etapie — od zapytania po gotowy plik z leadami, a to wszystko w intuicyjnej formie zarówno dla Was, jak i dla klientów.",
    accent: "gold",
  },
];

// ── Porównanie pakietów ────────────────────────────────────────────────────────

/** true = jest, false = brak, string = wartość/opis */
export type CompareValue = boolean | string;

export interface CompareRow {
  label: string;
  p1: CompareValue;
  p2: CompareValue;
}

export const COMPARE_HEADERS = {
  p1: { name: "Koszyk i zapytania", price: "7 000 zł" },
  p2: { name: "Rozszerzony", price: "13 000 zł" },
};

export const COMPARISON: CompareRow[] = [
  { label: "Koszyk i wysyłka zapytań", p1: true, p2: true },
  { label: "Zawsze aktualna lista nośników", p1: true, p2: true },
  { label: "Zapytanie mailem + potwierdzenie dla klienta", p1: true, p2: true },
  { label: "Czas wdrożenia", p1: "~30 dni", p2: "poniżej 10 dni roboczych" },
  { label: "Udostępnianie koszyka linkiem", p1: false, p2: true },
  { label: "Oferta gotowa w PDF", p1: false, p2: true },
  { label: "Wszystkie leady w jednym pliku", p1: false, p2: true },
  { label: "Rozbudowany, intuicyjny koszyk", p1: "podstawowy", p2: "rozbudowany" },
  { label: "Brandowany e-mail z podglądami nośników", p1: false, p2: true },
];

// ── Utrzymanie (opcjonalnie) ──────────────────────────────────────────────────

export const MAINTENANCE = {
  price: "950 zł",
  priceNote: "/ mies.",
  eyebrow: "Opieka po wdrożeniu",
  title: "Opcjonalne utrzymanie — bez myślenia o tym",
  perks: [
    "Dane zawsze aktualne — pilnujemy tego za Was",
    "Coś przestanie działać — naprawiamy natychmiast",
    "Drobne zmiany w treści i formularzu w cenie",
    "Priorytetowy kontakt — reagujemy od ręki",
  ],
  note: "Opcjonalnie. System działa też bez tego — to wygoda, nie warunek.",
};

// ── Kontakt ──────────────────────────────────────────────────────────────────

export interface Contact {
  name: string;
  phone: string; // format do tel: (bez spacji)
  phoneDisplay: string;
}

export const CONTACTS: Contact[] = [
  { name: "Kamil", phone: "+48501747490", phoneDisplay: "+48 501 747 490" },
  { name: "Leon", phone: "+48728561373", phoneDisplay: "+48 728 561 373" },
];
