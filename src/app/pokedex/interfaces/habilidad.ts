export interface Habilidad {
    effect_changes:      any[];
    effect_entries:      EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    generation:          Generation;
    id:                  number;
    is_main_series:      boolean;
    name:                string;
    names:               Name[];
    pokemon:             Pokemon2[];
}

export interface EffectEntry {
    effect:       string;
    language:     Generation;
    short_effect: string;
}

export interface Generation {
    name: string;
    url:  string;
}

export interface FlavorTextEntry {
    flavor_text:   string;
    language:      Generation;
    version_group: Generation;
}

export interface Name {
    language: Generation;
    name:     string;
}

export interface Pokemon2 {
    is_hidden: boolean;
    pokemon:   Generation;
    slot:      number;
}
