import {Component, Input} from '@angular/core';
import {Language} from "../../../models";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.scss'
})
export class LanguageSelectionComponent {
  @Input() languages: Language[] = [];
  @Input() selectedLanguageCode: string = '';

  dropdownOpen = false;

  get currentLanguage() {
    return this.languages.find(lang => lang.code === this.selectedLanguageCode);
  }

  get currentLanguageFlag(): string {
    return this.currentLanguage?.flag || '';
  }

  get currentLanguageName(): string {
    return this.currentLanguage?.name || 'Select Language';
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
