import { Component } from '@angular/core';
import { NavItem } from "../../models";
import { NgForOf, NgOptimizedImage } from "@angular/common";
import {LanguageSelectionComponent} from "./language-selection/language-selection.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    LanguageSelectionComponent,
    UserProfileComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { name: 'HOME', icon: 'assets/icons/home.png', link: '#' },
    { name: 'CATALOG VIDEO', icon: 'assets/icons/catalog-video.png', link: '#' },
    { name: 'DOWNLOAD VIDEO', icon: 'assets/icons/download.png', link: '#' },
    { name: 'BOOK', icon: 'assets/icons/book.png', link: '#' }
  ];

  languageList = [
    { code: 'en', name: 'English', flag: 'assets/icons/language/en.png' },
  ];

  currentLanguage = 'en';
}
