import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 's-trabajo',
    loadChildren: () => import('./pages/s-trabajo/s-trabajo.module').then( m => m.STrabajoPageModule)
  },
  {
    path: 's-trabajo',
    loadChildren: () => import('./pages/s-trabajo/s-trabajo.module').then( m => m.STrabajoPageModule)
  },
  {
    path: 'opc-s-trabajo',
    loadChildren: () => import('./pages/opc-s-trabajo/opc-s-trabajo.module').then( m => m.OpcSTrabajoPageModule)
  },
  {
    path: 's-trabajo-tb2',
    loadChildren: () => import('./pages/s-trabajo-tb2/s-trabajo-tb2.module').then( m => m.STrabajoTb2PageModule)
  },
  {
    path: 'opc-s-tb2',
    loadChildren: () => import('./pages/opc-s-tb2/opc-s-tb2.module').then( m => m.OpcSTb2PageModule)
  },
  {
    path: 's-trabajo-tb3',
    loadChildren: () => import('./pages/s-trabajo-tb3/s-trabajo-tb3.module').then( m => m.STrabajoTb3PageModule)
  },
  {
    path: 'opc-s-tb3',
    loadChildren: () => import('./pages/opc-s-tb3/opc-s-tb3.module').then( m => m.OpcSTb3PageModule)
  },
  {
    path: 's-trabajo-tb4',
    loadChildren: () => import('./pages/s-trabajo-tb4/s-trabajo-tb4.module').then( m => m.STrabajoTb4PageModule)
  },
  {
    path: 'opc-s-tb4',
    loadChildren: () => import('./pages/opc-s-tb4/opc-s-tb4.module').then( m => m.OpcSTb4PageModule)
  },
  {
    path: 'tp-telefono-tb1',
    loadChildren: () => import('./pages/tp-telefono-tb1/tp-telefono-tb1.module').then( m => m.TpTelefonoTb1PageModule)
  },
  {
    path: 'opc-tp-tb1',
    loadChildren: () => import('./pages/opc-tp-tb1/opc-tp-tb1.module').then( m => m.OpcTpTb1PageModule)
  },
  {
    path: 'opc-tp-tb2',
    loadChildren: () => import('./pages/opc-tp-tb2/opc-tp-tb2.module').then( m => m.OpcTpTb2PageModule)
  },
  {
    path: 'tp-pantalla-tb2',
    loadChildren: () => import('./pages/tp-pantalla-tb2/tp-pantalla-tb2.module').then( m => m.TpPantallaTb2PageModule)
  },
  {
    path: 'rt-raton-tb1',
    loadChildren: () => import('./pages/rt-raton-tb1/rt-raton-tb1.module').then( m => m.RtRatonTb1PageModule)
  },
  {
    path: 'opc-rt-tb1',
    loadChildren: () => import('./pages/opc-rt-tb1/opc-rt-tb1.module').then( m => m.OpcRtTb1PageModule)
  },
  {
    path: 'opc-rt-tb2',
    loadChildren: () => import('./pages/opc-rt-tb2/opc-rt-tb2.module').then( m => m.OpcRtTb2PageModule)
  },
  {
    path: 'rt-teclado-tb2',
    loadChildren: () => import('./pages/rt-teclado-tb2/rt-teclado-tb2.module').then( m => m.RtTecladoTb2PageModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./pages/tiempo/tiempo.module').then( m => m.TiempoPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
