export interface GridMenu {
    title: string;
    url: string;
    icon: string;
    color: string;
    colordark: string;
}

export interface MenuList {
    tipo_curso_id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
}

export interface User {
    nombreusuario: string;
    correo: string;
    access_token: string;
}

export interface AuthUser {
    p_id: string;
    nombre: string;
    correo: string;
    access_token: string;
}

