import { areas } from './areas';
import { services } from './services';
import { site } from './site';

const pageUrl = (path: string) => new URL(path, site.url).href;

export function graph(nodes: unknown[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

export function businessNode() {
  return {
    '@type': ['HousePainter', 'HomeAndConstructionBusiness'],
    '@id': `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: [
      pageUrl('/images/og.jpg'),
      pageUrl('/images/hero.webp'),
      pageUrl('/favicon.png'),
    ],
    logo: pageUrl('/favicon.png'),
    vatID: site.vat,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Companies House',
      value: site.companyNumber,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.lat,
      longitude: site.lng,
    },
    hasMap: site.google,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bedfordshire' },
      { '@type': 'AdministrativeArea', name: 'Buckinghamshire' },
      ...areas.map((area) => ({ '@type': 'City', name: area.name })),
    ],
    sameAs: [site.facebook, site.google],
    currenciesAccepted: 'GBP',
    knowsLanguage: 'en-GB',
    description:
      'Painters and decorators based in Biddenham, Bedford. Homes and businesses across Bedfordshire, Buckinghamshire and London.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-1234-900002',
      email: site.email,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Decorating and refurbishment',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: pageUrl(`/services/${service.slug}`),
        },
      })),
    },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'en-GB',
    publisher: { '@id': `${site.url}/#business` },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function serviceLd(service: { title: string; lede: string; slug: string }) {
  return {
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.lede,
    url: pageUrl(`/services/${service.slug}`),
    provider: { '@id': `${site.url}/#business` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bedfordshire' },
      { '@type': 'AdministrativeArea', name: 'Buckinghamshire' },
      { '@type': 'City', name: 'London' },
    ],
  };
}
