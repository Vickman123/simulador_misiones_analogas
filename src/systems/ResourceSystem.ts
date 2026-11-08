import { EventBus } from '../utils/EventBus';

export interface InventoryItem {
  id: string;
  name: string;
  category: 'component' | 'tool' | 'consumable';
  description: string;
  inStock: boolean;
  inPlayerPossession: boolean;
}

export class ResourceSystem {
  private static instance: ResourceSystem;

  private items: Map<string, InventoryItem> = new Map();

  private constructor() {
    this.initDefaultInventory();
  }

  public static getInstance(): ResourceSystem {
    if (!ResourceSystem.instance) {
      ResourceSystem.instance = new ResourceSystem();
    }
    return ResourceSystem.instance;
  }

  private initDefaultInventory(): void {
    this.items.set('filter_hepa_c1', {
      id: 'filter_hepa_c1',
      name: 'Cartucho Filtro HEPA-C1 (Módulo Secundario)',
      category: 'component',
      description: 'Unidad presurizada de carbón activado y membrana de microfibra de borosilicato.',
      inStock: true,
      inPlayerPossession: false
    });

    this.items.set('seal_wrench', {
      id: 'seal_wrench',
      name: 'Llave Dinamométrica de Acople Rápido',
      category: 'tool',
      description: 'Herramienta de precisión para fijación de bridas de soporte vital.',
      inStock: true,
      inPlayerPossession: true
    });
  }

  public getItem(id: string): InventoryItem | undefined {
    return this.items.get(id);
  }

  public getAllItems(): InventoryItem[] {
    return Array.from(this.items.values());
  }

  public hasItem(id: string): boolean {
    const item = this.items.get(id);
    return !!item && item.inPlayerPossession;
  }

  public retrieveFilterFromCabinet(): boolean {
    const item = this.items.get('filter_hepa_c1');
    if (item && item.inStock && !item.inPlayerPossession) {
      item.inStock = false;
      item.inPlayerPossession = true;
      EventBus.getInstance().emit('resources:itemRetrieved', item);
      return true;
    }
    return false;
  }

  public consumeFilter(): boolean {
    const item = this.items.get('filter_hepa_c1');
    if (item && item.inPlayerPossession) {
      item.inPlayerPossession = false;
      EventBus.getInstance().emit('resources:itemConsumed', item);
      return true;
    }
    return false;
  }

  public reset(): void {
    this.initDefaultInventory();
  }
}
