import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Publication {
  title: string;
  publisher: string;
  publishDate: string;
  link: string;
}

@Component({
  selector: 'publication.component',
  imports: [CommonModule, NgbCarouselModule, NgOptimizedImage],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.scss'
})
export class PublicationComponent {
  readonly publications = signal<Publication[]>([
    {
      title: 'The human-centric framework integrating knowledge distillation architecture with fine-tuning mechanism for equipment health monitoring',
      publisher: 'Advanced Engineering Informatics',
      publishDate: 'May 2025',
      link: 'https://doi.org/10.1016/j.aei.2025.103167',
    },
    {
      title: 'The multisensor information fusion-based deep learning model for equipment health monitor',
      publisher: 'Journal of Intelligent Manufacturing',
      publishDate: 'Mar 2024',
      link: 'https://doi.org/10.1007/s10845-024-02338-x',
    },
    {
      title: 'Constructing modified variable neighborhood search approaches to solve a nurse scheduling problem',
      publisher: 'International Journal of Production Research',
      publishDate: 'Mar 2024',
      link: 'https://doi.org/10.1080/00207543.2024.2320707',
    },
    {
      title: 'Optimal analysis of a multi-server queue with preprocessing time and replenishment inventory',
      publisher: 'Journal of the Chinese Institute of Engineers',
      publishDate: 'Nov 2023',
      link: 'https://doi.org/10.1080/02533839.2023.2274089',
    },
    {
      title: 'The deep learning-based equipment health monitoring model adopting subject matter expert',
      publisher: 'International Journal of Computer Integrated Manufacturing',
      publishDate: 'Sep 2023',
      link: 'https://doi.org/10.1080/0951192X.2023.2257665',
    },
    {
      title: 'Developing three-phase modified bat algorithms to solve medical staff scheduling problems while considering minimal violations of preferences and mean workload',
      publisher: 'Technology and Health Care',
      publishDate: 'May 2022',
      link: 'https://doi.org/10.3233/THC-202547',
    },
    {
      title: 'Improving the Return Loading Rate Problem in Northwest China Based on the Theory of Constraints',
      publisher: 'Mathematics',
      publishDate: 'Jun 2021',
      link: 'https://doi.org/10.3390/math9121397',
    },
    {
      title: 'Applying Meta-Heuristics Algorithm to Solve Assembly Line Balancing Problem with Labor Skill Level in Garment Industry',
      publisher: 'International Journal of Computational Intelligence Systems',
      publishDate: 'Apr 2021',
      link: 'https://doi.org/10.2991/ijcis.d.210420.002',
    },
    {
      title: 'The Dynamic Adjusting Model of Traffic Queuing Time—A Monte Carlo Simulation Study',
      publisher: 'Applied Sciences',
      publishDate: 'Sep 2020',
      link: 'https://doi.org/10.3390/app10186364',
    },
    {
      title: 'The equilibrium contract rent and reward money under incomplete information in reverse supply chains: A game theoretical approach and computational study',
      publisher: 'Computers & Industrial Engineering',
      publishDate: 'Dec 2016',
      link: 'https://doi.org/10.1016/j.cie.2016.10.002',
    },
    {
      title: 'The Cournot production game with multiple firms under an ambiguous decision environment',
      publisher: 'Information Sciences',
      publishDate: 'May 2014',
      link: 'https://doi.org/10.1016/j.ins.2013.12.033',
    },
    {
      title: 'The equilibrium quantity and production strategy in a fuzzy random decision environment: Game approach and case study in glass substrates industries',
      publisher: 'International Journal of Production Economics',
      publishDate: 'Oct 2013',
      link: 'https://doi.org/10.1016/j.ijpe.2013.06.002',
    },
    {
      title: 'An RFID application in the food supply chain: A case study of convenience stores in Taiwan',
      publisher: 'Journal of Food Engineering',
      publishDate: 'Sep 2011',
      link: 'https://doi.org/10.1016/j.jfoodeng.2011.04.014',
    },
    {
      title: 'The Cournot game under a fuzzy decision environment',
      publisher: 'Computers & Mathematics with Applications',
      publishDate: 'May 2010',
      link: 'https://doi.org/10.1016/j.camwa.2010.02.031',
    },
    {
      title: 'A variable spread fuzzy linear regression model with higher explanatory power and forecasting accuracy',
      publisher: 'Information Sciences',
      publishDate: 'Oct 2008',
      link: 'https://doi.org/10.1016/j.ins.2008.06.005',
    },
  ]);
}
