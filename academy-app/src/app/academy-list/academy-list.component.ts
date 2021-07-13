import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { GridListItemOutputEvent } from '@fundamental-ngx/core';


interface GridListItem {
  id: number;
  title: string;
  description: string;
  type?: string,
  counter?: number;
  selected?: boolean;
  image?: string;
  wrkbk?: string;
}

@Component({
  selector: 'app-academy-list',
  templateUrl: './academy-list.component.html',
  styleUrls: ['./academy-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AcademyListComponent implements OnInit {
  list: GridListItem[] = [
    {
        id: 1,
        title: 'SAP Analytics Cloud',
        description: 'SAC workshops present an overview of the SAP Analytics Cloud and then utilize the most commonly used features to solve common business-related questions',
        image: 'assets/SAC.png',
        wrkbk:'https://jam4.sapjam.com/wiki/show/NOe2tRm89Krj4iJwdRabdj?_lightbox=true'
      },
    {
        id: 2,
        title: 'SAP Data Intelligence',
        description: 'SAP Data Intelligence workshops focus on providing hands-on experience on the key features of Data Intelligence application.',
        image: 'assets/DI.png',
        wrkbk:'https://jam4.sapjam.com/wiki/show/tTxUejhBBpd4tHjHTbFRUV?_lightbox=true'
    },
    {
        id: 3,
        title: 'SAP HANA Cloud',
        description: 'This workshop provides hands-on experience with Data Provisioning on HANA Cloud from on-premise data sources like on-prem HANA, S4, and cloud sources like S3 as well as HANA Cloud Data Lake.',
        image: 'assets/HC.png',
        wrkbk:'https://jam4.sapjam.com/wiki/show/ZpIfGLHwgn1TyAPS5bLBcT?_lightbox=true'
    },
    {
        id: 4,
        title: 'SAP Analytics Cloud for Planning',
        description: 'SAP Analytics Cloud for planning increases engagement and accuracy when creating plans and budgets in different lines of business. With collaboration at the center of crowdsourcing plans, SAP Analytics Cloud for Planning empowers every business area to collaborate in real-time by breaking down data silos, unifying plans, and aligning processes',
        image: 'assets/SACPlanning.png',
        wrkbk:'https://jam4.sapjam.com/wiki/show/TOC9dpZ9mxvd17kaHsDuoT?_lightbox=true'
    },
    {
        id: 5,
        title: 'SAP Data Warehouse Cloud',
        description: 'The purpose of the hands-on exercises are to get you familiar with the Data Warehouse Cloud solution. There are four runbooks available.',
        image: 'assets/DWC.png',
        wrkbk:'https://jam4.sapjam.com/wiki/show/jSaHpcMg3dfOQlbTAKsMI8?_lightbox=true'

    },
    {
        id: 6,
        title: 'SAP BTP Core',
        description: 'SAP Business Technology Platform provides you with a flexible, open, and integrated platform for all your integration, extension, and application development needs.',
        image: 'assets/BTP.png',
        wrkbk:'https://jam4.sapjam.com/wiki/show/Us8iY3gQJpgySIpTVDocPC?_lightbox=true'

    },
    {
        id: 7,
        title: 'BPI',
        description: 'The Signavio Business Transformation Suite is a powerful, all-in-one platform that helps you quickly realign your organization and bring changes to life at an accelerated rate. It exists to support the core of your business: the processes that you carry out every day.',
        image: 'assets/BPI.png',
        wrkbk:'https://jam4.sapjam.com/wiki/show/m6B92TS6eWMeFW74D4AfKZ?_lightbox=true'

    }
];

onSelectionChange(event: GridListItemOutputEvent<number>): void {
    console.log('Single Select Left: selected item', event);
}

press(event: GridListItemOutputEvent<number>): void {
    console.log('Press event', event);
}

detail(event: GridListItemOutputEvent<number>): void {
    console.log('Detail event', event);
}

navigate(event: GridListItemOutputEvent<number>): void {
    console.log('Navigation event', event);
}


  constructor() { }

  ngOnInit(): void {
  }

}
