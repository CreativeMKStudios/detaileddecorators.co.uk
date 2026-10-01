import type { PhotoKey } from './photos';

export interface ServiceSection {
  heading: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  image: PhotoKey;
  paragraphs: string[];
  sections?: ServiceSection[];
  includes: string[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'painting-and-decorating',
    title: 'Painting and decorating',
    summary: 'Walls, woodwork, wallpaper and spray work, inside and out.',
    lede: 'Walls, ceilings, woodwork and wallpaper for homes and commercial rooms. Furniture is covered, and the paint is in the quote.',
    metaTitle: 'Painters & Decorators in Bedford | Detailed Decorators',
    metaDescription:
      'House painters in Bedford and the villages around Biddenham. Free survey, paint included, and tidy back-to-back days. Call 01234 900 002.',
    image: 'hero',
    paragraphs: [
      'Most jobs start with a room that looks tired, or a whole house that needs a proper finish after building work. Adam visits, checks the walls and woodwork, and talks through the colour. The quote lists the rooms and the paint.',
      'We prepare first. Cracks get filled. Rough woodwork gets sanded. Stains get a primer when they need one. Then we cut in and roll, or we spray where spray will give a flatter finish.',
      'Halls, stairs and landings are a steady part of the work in Bedford houses. So are sash windows and outside woodwork when the weather is right. We hang wallpaper too, including papers from Cole & Son, Zoffany and Harlequin.',
    ],
    includes: [
      'Walls, ceilings and woodwork',
      'Halls, stairs and landings',
      'Wallpaper hanging',
      'Spray work, including kitchen units',
      'Outside masonry and woodwork',
      'Furniture and floors covered',
      'Trade paint in the quote',
      'Clean-up and waste taken away',
    ],
    related: ['plastering-coving-drywall', 'interiors-curtains-blinds', 'external-refurbishment'],
  },
  {
    slug: 'plastering-coving-drywall',
    title: 'Plastering, coving and drywall',
    summary: 'Skim coats, repairs, coving and stud walls before the paint goes on.',
    lede: 'Straight walls and clean lines make the paint look right. We skim, patch, board and run coving before we decorate.',
    metaTitle: 'Plastering & Coving in Bedford | Detailed Decorators',
    metaDescription:
      'Plastering, coving and drywall in Bedfordshire. Skim coats and repairs, then a paint finish from the same team. Call 01234 900 002.',
    image: 'living',
    paragraphs: [
      'Paint will not hide a bad wall. If the plaster is blown, cracked or wavy, we sort that before any colour goes on. Adam will point it out at the survey so it is in the price, not a surprise on day two.',
      'We skim rooms, patch small areas, and fix the damage left by other trades. Stud walls and drywall go in when a room needs to change shape. Coving and cornice tidy the join between wall and ceiling, which matters in older Bedford houses.',
      'Outside render sits with our external work. If the house needs both a skim inside and render outside, we plan them as one job.',
    ],
    includes: [
      'Full room skim coats',
      'Patch repairs and making good',
      'Coving and cornice',
      'Drywall and stud walls',
      'Ceilings made ready to paint',
      'Prep included before decoration',
    ],
    related: ['painting-and-decorating', 'home-refurbishment', 'external-refurbishment'],
  },
  {
    slug: 'home-refurbishment',
    title: 'Home and commercial refurbishment',
    summary: 'Kitchens, bathrooms, lofts and full rooms, planned as one job.',
    lede: 'When a room needs more than paint, we plan the whole job. Kitchens, bathrooms, lofts and commercial rooms are booked as one piece of work.',
    metaTitle: 'Home Refurbishment in Bedford | Detailed Decorators',
    metaDescription:
      'Kitchen, bathroom, loft and full-home updates from a Bedford team. One survey, one quote, one run of days. Call 01234 900 002.',
    image: 'bedroom',
    paragraphs: [
      'A fresh coat is often the last step, not the first. People call us when a kitchen is dated, a bathroom is tired, or a loft is still a bare space. Adam walks the job with you and the quote sets out each part.',
      'Shops, offices and other commercial rooms are welcome. Tell us when the space can be empty and we will work to that.',
    ],
    sections: [
      {
        heading: 'Kitchens and bathrooms',
        text: 'We update kitchens and bathrooms as part of the wider refurbishment. Decoration, tiling, flooring and the trades around them are lined up so you are not chasing five different firms.',
      },
      {
        heading: 'Lofts and bedrooms',
        text: 'Lofts and bedrooms are a common ask. That can be boarding and paint, fitted storage, new flooring, or a full change of the room. The bedroom photos on this site show the kind of calm finish we aim for.',
      },
      {
        heading: 'Whole homes',
        text: 'On a full house we work room by room, on back-to-back days where the diary allows. You get updates, and Adam checks the finish with you.',
      },
    ],
    includes: [
      'Kitchen updates',
      'Bathroom updates',
      'Loft and bedroom work',
      'Full home decoration after building work',
      'Commercial rooms and shops',
      'One quote for the whole job',
    ],
    related: ['kitchens-bathrooms', 'flooring-and-tiling', 'joinery-and-storage'],
  },
  {
    slug: 'kitchens-bathrooms',
    title: 'Kitchens and bathrooms',
    summary: 'Updates that join decoration, tiling and the trades around them.',
    lede: 'Kitchens and bathrooms take a mix of skills. We decorate, tile, and line up the plumbing and electrical work the room needs.',
    metaTitle: 'Kitchen & Bathroom Updates in Bedford | Detailed Decorators',
    metaDescription:
      'Kitchen and bathroom updates in Bedford. Decoration, tiling and the linked trades, quoted after a free survey. Call 01234 900 002.',
    image: 'card',
    paragraphs: [
      'These rooms show every flaw. Gloss on units, silicone at the bath, and tiles that do not line up are the things you see every day. We slow down on those details.',
      'Spraying is useful on kitchen units when a brush would leave lines. Walls get the right prep for a wet room, and tiles are set out so cuts sit in the corners, not the middle of the wall.',
      'Plumbing and electrical changes are named on the quote. Gas work is done by a Gas Safe registered engineer. Electrical work that needs a certificate is signed off.',
    ],
    includes: [
      'Kitchen decoration and unit spraying',
      'Bathroom decoration',
      'Wall and floor tiling',
      'Making good after plumbing changes',
      'Lighting and extract where the quote includes them',
      'A clear list of who does each trade',
    ],
    related: ['flooring-and-tiling', 'electrical-plumbing-heating', 'home-refurbishment'],
  },
  {
    slug: 'flooring-and-tiling',
    title: 'Carpets, flooring and tiling',
    summary: 'Carpets, wood, vinyl and tiles, fitted as part of the room.',
    lede: 'We fit carpets, wood, vinyl and tiles. If the floor needs prep, Adam says so at the survey and puts it in the quote.',
    metaTitle: 'Carpets, Flooring & Tiling in Bedford | Detailed Decorators',
    metaDescription:
      'Carpets, wood floors, vinyl and tiling in Bedfordshire. Fitted with the decorating, so the room is finished together. Call 01234 900 002.',
    image: 'card',
    paragraphs: [
      'A new floor makes more difference than people expect. Stairs with a proper runner, a hall in herringbone vinyl, or a bathroom in tile: we fit these as part of the same job as the paint.',
      'We move furniture when that is agreed, and we protect the rooms we walk through. Door trims are undercut when a thicker floor needs it. If a floor is too far gone to cover, we will say so before you book.',
      'Wall tiles in kitchens and bathrooms are set out from the centre of the main view, so the pattern looks even when you walk in.',
    ],
    includes: [
      'Carpets and stair runners',
      'Laminate and wood floors',
      'Vinyl and LVT',
      'Floor tiles and wall tiles',
      'Gripper, underlay and trims',
      'Prep called out in the quote',
    ],
    related: ['painting-and-decorating', 'kitchens-bathrooms', 'home-refurbishment'],
  },
  {
    slug: 'joinery-and-storage',
    title: 'Joinery and storage',
    summary: 'Shelves, wardrobes and cupboards made to fit the room.',
    lede: 'Alcoves, wardrobes and under-stair cupboards made to the size of your room. This is the made-to-fit joinery we call bespoke storage.',
    metaTitle: 'Fitted Joinery & Storage in Bedford | Detailed Decorators',
    metaDescription:
      'Fitted shelves, wardrobes and storage in Bedford. Made to the room, then painted with the rest of the job. Call 01234 900 002.',
    image: 'living',
    paragraphs: [
      'A lot of Bedford houses have alcoves beside the chimney. Open shelves or a cupboard in that gap gives you storage and a clean line. We build it to the wall, then paint it with the room so it looks like it has always been there.',
      'Wardrobes made to fit beat a flat-pack that stops 40mm short of the ceiling. Under-stair cupboards, window seats and pipe boxing are the same idea: use the odd space, and finish it properly.',
      'Doors, skirting and architrave are replaced when they are split or swollen. New wood is filled, primed and painted with the rest of the woodwork.',
    ],
    includes: [
      'Alcove shelves and cupboards',
      'Wardrobes made to fit',
      'Under-stair storage',
      'Pipe boxing and window seats',
      'Skirting, architrave and doors',
      'Painted to match the room',
    ],
    related: ['painting-and-decorating', 'home-refurbishment', 'interiors-curtains-blinds'],
  },
  {
    slug: 'electrical-plumbing-heating',
    title: 'Electrical, gas, plumbing and heating',
    summary: 'The services behind a refurbishment, named on the quote.',
    lede: 'Lighting, sockets, plumbing, heating and boilers, booked with the decorating so the room is finished once.',
    metaTitle: 'Plumbing, Heating & Electrics | Detailed Decorators',
    metaDescription:
      'Electrical, plumbing, heating and boiler work with your Bedford refurbishment. Gas Safe engineers for gas. Call 01234 900 002.',
    image: 'bedroom',
    paragraphs: [
      'Decoration often waits on the trades in the wall. A new light, a radiator move, or a tap that needs a plumber: we put those on the same quote so the paint is not marked by the next person through the door.',
      'Gas work in the UK has to be done by a Gas Safe registered engineer. We name that person on the quote. Electrical work that needs a certificate is signed off. You can ask Adam which parts need that when he visits.',
      'Boilers and heating are part of this work. If a boiler change means cupboards, pipes or making good, that is priced before we start.',
    ],
    includes: [
      'Lighting and extra sockets',
      'Plumbing for kitchens and bathrooms',
      'Radiators and heating changes',
      'Boiler work with a named engineer',
      'Gas work by a Gas Safe engineer',
      'Certificates where the job needs them',
    ],
    related: ['smart-home-and-security', 'kitchens-bathrooms', 'home-refurbishment'],
  },
  {
    slug: 'smart-home-and-security',
    title: 'Smart home, lighting and security',
    summary: 'Lighting, alarms and cameras, planned before the walls are painted.',
    lede: 'Lights, alarms and cameras are easier to fit before the final coat. We plan them with the decorating so cables are not chased in afterwards.',
    metaTitle: 'Smart Home, Lighting & Security | Detailed Decorators',
    metaDescription:
      'Home lighting, alarms and security in Bedford, fitted with your decorating. CCTV and electric gates too. Call 01234 900 002.',
    image: 'bedroom',
    paragraphs: [
      'A smart home does not have to mean a complicated app. For most houses it is good lighting, a switch where you actually need it, and an alarm that is simple to set.',
      'We fit lighting and security systems as part of a wider job. Cables are run while the walls are open or before the final paint, so you are not looking at fresh clips on a new ceiling.',
      'Outdoor cameras, gates and the rest of the outside security work are covered with our external refurbishment. Adam will say which part sits inside and which sits outside when he surveys.',
    ],
    includes: [
      'Lighting plans and extra points',
      'Alarms and in-home security',
      'Cables run before the final paint',
      'CCTV, with the external team',
      'Electric gates, quoted with the outside work',
      'A plain explanation of how to use it',
    ],
    related: ['electrical-plumbing-heating', 'external-refurbishment', 'interiors-curtains-blinds'],
  },
  {
    slug: 'interiors-curtains-blinds',
    title: 'Interior design, curtains and blinds',
    summary: 'Help with colour, wallpaper, curtains, blinds and shutters.',
    lede: 'We help you choose colour, wallpaper, curtains, blinds and shutters, then we fit and paint so it all works together.',
    metaTitle: 'Curtains, Blinds & Colour Advice | Detailed Decorators',
    metaDescription:
      'Colour advice, wallpaper, curtains, blinds and shutters in Bedford. Chosen at the survey and fitted with the decorating. Call 01234 900 002.',
    image: 'bedroom',
    paragraphs: [
      'The hard part is often the decision, not the brush. At the survey we talk about light, the way you use the room, and how much pattern you want. You leave with a plan, not a pile of sample pots and no answer.',
      'We supply and fit curtains, blinds and shutters. Shutters suit bay windows and bedrooms that need privacy without heavy fabric. Curtains and blinds are measured to the window, not guessed.',
      'Wallpaper from Zoffany, Cole & Son, Harlequin and Clarke & Clarke is hung by the same team that paints the woodwork. The pattern meets, and the edges stay stuck.',
    ],
    includes: [
      'Colour and finish advice at the survey',
      'Wallpaper supply and hanging',
      'Curtains made and fitted',
      'Blinds and shutters',
      'Samples talked through in the room',
      'Paint and papers from trade ranges',
    ],
    related: ['painting-and-decorating', 'joinery-and-storage', 'home-refurbishment'],
  },
  {
    slug: 'external-refurbishment',
    title: 'External refurbishment',
    summary: 'Roofs, windows, render, drives, cleaning and outside security.',
    lede: 'The outside of the building, from the gutter to the drive. We repair, replace and decorate, and we clean what can be saved.',
    metaTitle: 'External Refurbishment in Bedford | Detailed Decorators',
    metaDescription:
      'Roofing, windows, render, driveways and exterior painting in Bedfordshire. One Bedford team for the outside of the house. Call 01234 900 002.',
    image: 'orangery',
    paragraphs: [
      'Outside work is booked when the weather allows, and the quote says what happens if it rains. Adam checks the building at the survey so rotten timber and failed gutters are priced, not discovered after the scaffold is up.',
    ],
    sections: [
      {
        heading: 'Roofing, fascias, soffits and guttering',
        text: 'We repair and replace fascias, soffits and guttering, and we carry out roofing work that sits with that. Leaks and rotten boards are better fixed before anyone paints the eaves.',
      },
      {
        heading: 'Windows, doors and bi-fold doors',
        text: 'We install windows, doors and bi-fold doors, and we paint or spray the frames. A garden room or a new back door is measured on site. The white garden room on the projects page is one of these jobs.',
      },
      {
        heading: 'Stonework, rendering and exterior repair',
        text: 'Render, stone and tired masonry can be repaired and then decorated. We match the repair to the house rather than coating over a fault and hoping it stays put.',
      },
      {
        heading: 'Driveways, patios, decking and landscaping',
        text: 'Drives, patios and decking are part of the outside job. We will say if the base needs digging out. A surface laid on a soft base will move, so that conversation happens before you book.',
      },
      {
        heading: 'Exterior cleaning',
        text: 'We clean roofs, driveways and gutters. Cleaning is often the right first step. If the surface is sound, you may not need a replacement.',
      },
      {
        heading: 'CCTV and electric gates',
        text: 'Home security on the outside of the property includes CCTV and electric gates. Power and cables are planned with the rest of the work so the drive is not dug up twice.',
      },
    ],
    includes: [
      'Roofing, fascias, soffits and gutters',
      'Windows, doors and bi-fold doors',
      'Stonework, render and repairs',
      'Driveways, patios and decking',
      'Roof, drive and gutter cleaning',
      'CCTV and electric gates',
      'Exterior painting and spraying',
    ],
    related: ['painting-and-decorating', 'smart-home-and-security', 'plastering-coving-drywall'],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
