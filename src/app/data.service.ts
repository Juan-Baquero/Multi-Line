import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getData() {
    return this.datos;//this.http.get(this.rootURL+'/get_flare', this.options)
  }

  datos={
    //Se deben filtrar "" en los textos
    "name": "flare",
    "children": [
      {
        "name": "Alta temperatura",
        "value": 5,
        "avisos": [{ "fecha": "Viernes 17", "descripcion": "FALLA AIRE ACOND. OFICINAS PRINCIPALES", "objeto": "AIRE AC OFICINAS PRINCIPALES", "parte": "Unidad Condensadora" }, { "fecha": "Viernes 17", "descripcion": "ALARMA TEMPERATURA COJINETE BPC-42030", "objeto": "MOTOR ELECTRICO PRINCIPAL BP42030", "parte": "Rodamientos" }, { "fecha": "Viernes 17", "descripcion": "ALARMA PLAN DE SELLOS BOMBA L/A BPC42080", "objeto": "BOMBA CENTRIFUGA BP42080", "parte": "Sellos" }, { "fecha": "Domingo 05", "descripcion": "ALTA TEMPERATURA VFD RB -41130", "objeto": "AIRE AC PQE VFD41130", "parte": "Sensores" }, { "fecha": "Sábado 11", "descripcion": "CILINDRO 1 PRESENTA BAJA TEMP BPC 40", "objeto": "MOTOR DIESEL BPC42040", "parte": "Culatas" },]
      },
      {
        "name": "Atascamiento",
        "value": 1,
        "avisos": [{ "fecha": "Viernes 24", "descripcion": "FALLA DE APERTURA MOV-305004", "objeto": "LDS VALVULA MOV BOLA TP305", "parte": "Circuitos o Componentes electrónicos" },]

      },
      {
        "name": "Baja presión",
        "value": 2,
        "avisos":[{"fecha":"Martes 21","descripcion":"ALARMA FILTRO ACEITE ICL-42030","objeto":"SWITCH DE PRES BAJA PSLL-420332F","parte":"Filtro"},{"fecha":"Sábado 11","descripcion":"Perdida de Nitrogeno PSV-240108A","objeto":"PANEL NITROGENO P-PSV-240108A","parte":"Tubería / Válvulas"},]

      },
      {
        "name": "Daño material, grietas, desgaste, corr.",
        "value": 14,
        "avisos":[{"fecha":"Jueves 23","descripcion":"BONINAS EN CORTO DEL MOTOR BLOWER PTAR","objeto":"PLANTA TRATAMIENTO DE AGUA RESIDUAL","parte":"Rotor"},{"fecha":"Domingo 19","descripcion":"FALLA UNIDAD BPC-42020","objeto":"GOBERNADOR VELOCIDAD MOTOR BPC-20","parte":"Motor Actuador"},{"fecha":"Martes 07","descripcion":"DAÑO SWITCHES DE NIVEL PTAR","objeto":"PLANTA TRATAMIENTO AGUA RESIDUAL","parte":"Accionador / Terminales"},{"fecha":"Domingo 26","descripcion":"Fuga HIDRANTE MONITOR 29","objeto":"RED HIDRANTES BOMBAS BOOSTER","parte":"Tubería / Válvulas"},{"fecha":"Jueves 09","descripcion":"ATASCAMIENTO BOMBA BAHIA BT-20050","objeto":"BOMBA CENTRIFUGA BAHIA 50","parte":"Paletas"},{"fecha":"Domingo 19","descripcion":"HUMEDECIMIENTO ACEITE LINEA 2 BOMBA 90","objeto":"MOTOR DIESEL BP42090","parte":"Sellos / Empaques"},{"fecha":"Domingo 26","descripcion":"ALARMA PLANDE SELLOS L/A BR 41110","objeto":"BOMBA CENTRIFUGA BR41110","parte":"Sellos"},{"fecha":"Viernes 10","descripcion":"HUMEDECIMIENTO COMBUSTIBLE BA304","objeto":"MOTOR DIESEL BA304","parte":"Control de Combustible (Gas / Diesel)"},{"fecha":"Viernes 10","descripcion":"HUMEDECIMIENTO COMBUSTIBLE BA303","objeto":"BOMBA BA303","parte":"Control de Combustible"},{"fecha":"Viernes 10","descripcion":"REVISION CAMBIO MOTOR ARRANQUE BPC 42010","objeto":"MOTOR DIESEL BPC42010","parte":"Motor de Arranque"},{"fecha":"Lunes 20","descripcion":"CAMBIO TRASERO SELLO CIGUEÑAL BPC 42030","objeto":"MOTOR DIESEL BPC42030","parte":"Sellos / Empaques"},{"fecha":"Viernes 24","descripcion":"CAMBIO YUGO VALVULA RECICLO BPC 42080","objeto":"VALVULA FLUJO RECIRCULACION BPC42080","parte":"Cuerpo de la Válvula"},{"fecha":"Jueves 02","descripcion":"Reparacion  Yoke Box BPC-90","objeto":"","parte":"Cuerpo / Carcasa / Armazón"},{"fecha":"Jueves 16","descripcion":"CAMBIO SPOOL SPA AD600 BPC 42100","objeto":"","parte":"Tubería / Válvulas"},]
      },
      {
        "name": "Fire and gas",
        "children": [
          { "name": "Falsa alarma e indicación Gas Detecc.", "value": 3,
          "avisos":[{"fecha":"Martes 21","descripcion":"FALLA SISTEMA VESDA SALA CONTROL","objeto":"SISTEMA DETECCION HUMO","parte":"Equipos FireFalsa alarma e indicación Gas - Detecc."},{"fecha":"Martes 21","descripcion":"FALLA SISTEMA VESDA SALA CONTROL","objeto":"SISTEMA DETECCION HUMO","parte":"Equipos FireFalsa alarma e indicación Gas - Detecc."},{"fecha":"Martes 21","descripcion":"FALLA SISTEMA VESDA SALA CONTROL","objeto":"SISTEMA DETECCION HUMO","parte":"Equipos FireFalsa alarma e indicación Gas - Detecc."},]
         },
          { "name": "No resp bajo demanda o en emerg. Gas Extin.", "value": 1 ,
          "avisos":[{"fecha":"Jueves 02","descripcion":"FALLA SIS. F&G BOMBAS DE TRANSF FUERA SE","objeto":"","parte":"Cableado y Caja de Conexiones"},]
        }
        ],
        "total": 4    
      },
      {
        "name": "Falsa alarma",
        "children": [
          { "name": "Falsa alarma e indicación", "value": 6,
          "avisos":[{"fecha":"Martes 07","descripcion":"FALLA EN PIC 303 LINEA ARAGUANEY","objeto":"VALVULA CTRL PRES MED ARAGUANEY","parte":"Sensores"},{"fecha":"Miércoles 22","descripcion":"PIT 820016A BAJA PRESION","objeto":"VALVULA SEG ALIV DANFLO PVS820016A","parte":"Tubería / Válvulas"},{"fecha":"Miércoles 22","descripcion":"ALARMA BAJA PRESIÓN PSV 820016B","objeto":"VALVULA SEG ALIV DANFLO PVS820016B","parte":"Cuerpo de la Válvula"},{"fecha":"Sábado 18","descripcion":"Baja presión Danflo Valvula HOV-152","objeto":"VALVULA DANFLO SACHICA PK152+762","parte":"Indicador o Sensor"},{"fecha":"Miércoles 22","descripcion":"Falla Mov 531001","objeto":"VALVULA MOV BOLA TUBERIA I_OC_ODC","parte":"Tope de recorrido"},{"fecha":"Viernes 17","descripcion":"MIRILLA EN MAL ESTADO DE MOV","objeto":"VALVULA MOV BOLA TUBERIA I_OC_ODC","parte":"Indicador o Sensor"},]
        },
          { "name": "Indicador defectuoso.", "value": 2 ,
          "avisos":[{"fecha":"Viernes 17","descripcion":"ALARMA PLAN DE SELLOS BOMBA L/L BPC42040","objeto":"BOMBA CENTRIFUGA BP42040","parte":"Sellos"},{"fecha":"Domingo 19","descripcion":"DISPARO AL PLAN DE SELLOS BOMBA BPC42080","objeto":"BOMBA CENTRIFUGA BP42080","parte":"Sellos"},]
        },
          { "name": "Indic. defectuosa de instrumento.", "value": 5 ,
          "avisos":[{"fecha":"Domingo 19","descripcion":"Falla BPC-20","objeto":"MOTOR DIESEL PPAL BPC-20","parte":"Control de Combustible (Gas / Diesel)"},{"fecha":"Martes 07","descripcion":"FALLA LECTOR TARJETA INGRESO VFD-42030","objeto":"TABLERO CTRL AA VFD42030","parte":"Monitoreo (PLC - Tarjetas - sensores)"},{"fecha":"Sábado 18","descripcion":"FALLA LECTOR TARJETA INGRESO VFD-42080","objeto":"TABLERO CTRL AA VFD42080","parte":"Monitoreo (PLC - Tarjetas - sensores)"},{"fecha":"Domingo 19","descripcion":"FALLA SINCRONISMO TURBINA SK-07-GN22070","objeto":"GENERADOR ELECT GD22070","parte":"Interruptor"},{"fecha":"Jueves 23","descripcion":"FALLA ARRANQUE BPC-42020 PERD 6.6 kV","objeto":"VARIADOR FRECUENCIA BPC42020","parte":"Interruptor"},]
        },
        ],
        "total": 13
      },
      {
        "name": "Frecuencia equivocada u oscilante", "value": 1,
        "avisos":[{"fecha":"Sábado 11","descripcion":"FALLA ARRANCADOR BAHIA 100 VFD 20100","objeto":"ARRANCADOR SUAVE BT20100","parte":"Arrancadores de Motor (Contactor)"},]
      },
      {
        "name": "Fuga",
        "children": [
          { "name": "Externa acei. hidráulico - Fl. Utilit.", "value": 1,"avisos":[{"fecha":"Sábado 18","descripcion":"HUMEDECIMIENTO ACEITE PUENTE GRUA FIII","objeto":"PUENTE GRUA BOMBA PRINCIPAL FASE III","parte":"Sellos / Juntas"},]
        },
          { "name": "Externa Aceite - Fluido Proceso", "value": 1,"avisos":[{"fecha":"Viernes 03","descripcion":"HUMEDECIMIENTO ACEITE CHUMACERA BPC50","objeto":"BOMBA CENTRIFUGA BP42050","parte":"Sellos / Empaques"},]
        },
          { "name": "Externa crudo - Fluido Proceso", "value": 9,"avisos":[{"fecha":"Miércoles 01","descripcion":"FUGA BPC-42010 SISTEMA REFRIGER BOMBA","objeto":"BOMBA CENTRI PPAL BPC-10","parte":"Tubería / Válvulas"},{"fecha":"Lunes 06","descripcion":"HUMEDECIMIENTO X BRIDA PROBADOR CUPIAGUA","objeto":"TUBERIA DESCARGA MEDICION","parte":"Brida / Junta Bridada"},{"fecha":"Viernes 17","descripcion":"HUMEDECIMIENTO SELLO PRIMARIO TAPA TP305","objeto":"TANQUE ALMAC CRUDO TP305","parte":"Techo"},{"fecha":"Sábado 18","descripcion":"ALARMA PLAN DE SELLOS BOMBA L/A BPC42010","objeto":"BOMBA CENTRIFUGA BPC42010","parte":"Sellos"},{"fecha":"Lunes 06","descripcion":"HUMEDECIMIENTO CRUDO V/V MOV 423018 BPC3","objeto":"VALVULA MOV BOLA DESCARGA BP42030","parte":"Sellos"},{"fecha":"Viernes 03","descripcion":"INST-BALANCE EMPAQUE DETERIORA BPC-42030","objeto":"BOMBA CENTRIFUGA BP42030","parte":"Tubería / Válvulas"},{"fecha":"Sábado 11","descripcion":"HUMEDECIMIENTO CRUDO MOV 380003","objeto":"","parte":"Cuerpo de la Válvula"},{"fecha":"Domingo 05","descripcion":"HUMECIMIENTO MANGUERA ALFA LAVAL 52300","objeto":"UNIDAD CENTRIFUGADO CRUDO CCS52300","parte":"Manguera"},{"fecha":"Lunes 20","descripcion":"Goteo de crudo por cheque bu59000","objeto":"BOMBA CENTRI REINYECCION","parte":"Tubería / Válvulas"},]
        },
          { "name": "Externa de Agua -Fluido de Proceso", "value": 1 ,"avisos":[{"fecha":"Lunes 06","descripcion":"FALLA PRENSESTOPA BOMBA BA-305","objeto":"BOMBA BA305","parte":"Sellos"},]
        },
          { "name": "Sistema Sellos Mecánicos", "value": 11,"avisos":[{"fecha":"Martes 07","descripcion":"ALARMA PLAN DE SELLOS BPC-42030","objeto":"BOMBA CENTRIFUGA BP42030","parte":"Sub. Bombeo SCI - FSellos G"},{"fecha":"Jueves 16","descripcion":"ALARMA PLAN DE SELLOS BPC-42040","objeto":"","parte":"Sub. Bombeo SCI - FSellos G"},{"fecha":"Martes 07","descripcion":"ALARMA PLAN DE SELLOS BPC-42040","objeto":"BOMBA CENTRIFUGA BP42040","parte":"Sub. Bombeo SCI - FSellos G"},{"fecha":"Martes 14","descripcion":"ALARMA PLAN DE SELLO L/E BPC-42040","objeto":"BOMBA CENTRIFUGA BP42040","parte":"Sellos"},{"fecha":"Domingo 05","descripcion":"ALARMA PLAN DE SELLOS BPC-42080","objeto":"","parte":"Sellos"},{"fecha":"Lunes 27","descripcion":"BPC 42080  FALLA  SELLOS LADO ACOPLE","objeto":"BOMBA CENTRIFUGA BP42080","parte":"Sellos"},{"fecha":"Miércoles 01","descripcion":"ALARMA PLAN DE SELLOS BPC-42080","objeto":"BOMBA CENTRIFUGA BP42080","parte":"Sellos"},{"fecha":"Martes 07","descripcion":"ALARMA PLAN DE SELLOS BR41120","objeto":"BOMBA CENTRIFUGA BR41120","parte":"Sellos"},{"fecha":"Martes 07","descripcion":"ALARMA PLAN DE SELLOS BR41130","objeto":"BOMBA CENTRIFUGA BR41130","parte":"Sellos"},{"fecha":"Viernes 03","descripcion":"ALARMA PLAN DE SELLOS BR-41140","objeto":"BOMBA CENTRIFUGA BR41140","parte":"Sellos"},{"fecha":"Martes 21","descripcion":"ALARMA PLAN DE SELLOS L/A BR41140","objeto":"BOMBA CENTRIFUGA BR41140","parte":"Tubería / Válvulas"},]
        }
        ],
        "total": 23
      },
      {
        "name": "Respuesta a comando",
        "children": [
          { "name": "No abre cuando se da la orden", "value": 3,"avisos":[{"fecha":"Lunes 06","descripcion":"FALLA COMANDOS MOV´S BRAZOS 1,2,3 FASE 1","objeto":"ACTU DE VALV MOTORI MOV-5101B","parte":"Tope de recorrido"},{"fecha":"Jueves 23","descripcion":"FALLA SISTEMA DE LUBRICACION TURBINA 30","objeto":"","parte":"Bomba"},{"fecha":"Miércoles 22","descripcion":"Falla de atascamiento MOV 531001","objeto":"VALVULA MOV BOLA TUBERIA I_OC_ODC","parte":"Tope de recorrido"},]
        },
          { "name": "No cierra cuando se da la orden", "value": 2,"avisos":[{"fecha":"Miércoles 22","descripcion":"Goteo de agua HM 05 Dique TK 12020","objeto":"RED HIDRANTES 2 TK12020","parte":"Válvulas de Drenaje o Principal"},{"fecha":"Miércoles 15","descripcion":"Falla medidor unidadaes VS-Val recircula","objeto":"VALVULA FLUJO RECIRCULACION BPC42030","parte":"Tope de recorrido"},]
        },
          { "name": "No hay señal", "value": 1,"avisos":[{"fecha":"Viernes 24","descripcion":"FALLA DENSITOMETRO BRAZO#9 MEDICIÓN","objeto":"TRANSMISOR DENSIDAD BRAZO 90","parte":"Indicador o Sensor"},]
        },
          { "name": "No resp bajo demanda o señal en emerg.", "value": 4,"avisos":[{"fecha":"Domingo 26","descripcion":"FALLA DEFICIENCIA AACON OFICINA AA","objeto":"AIRE AC MINISPLIT #1 OFICINAS MTTO","parte":"Unidad Condensadora"},{"fecha":"Lunes 13","descripcion":"FALLA AACON #2 SHELTER BAJA TENSION","objeto":"AIRE AC PQE #2 SHELTER BT","parte":"Compresor"},{"fecha":"Martes 21","descripcion":"FALLA VENTILADOR AACON #1 SHELTER MT","objeto":"AIRE AC PQE #1 SHELTER MT","parte":"Ventilador"},{"fecha":"Miércoles 01","descripcion":"ALTA TEMPERATURA VFD BPC-42080","objeto":"DUCTOS VFD-42080","parte":"Ventilador"},]
        },
          { "name": "No resp bajo demanda o señal en Operac", "value": 1,"avisos":[{"fecha":"Martes 07","descripcion":"CILINDRO TOMA MUESTRA ALTOS PORVENIR","objeto":"TOMAMUESTRAS CALIDAD 38","parte":"Acumulador"},]
        },
          { "name": "No resp bajo demanda o señal en Prueba", "value": 1,"avisos":[{"fecha":"Lunes 06","descripcion":"FALLA SWITCH NIVEL TU-50001 LSL DESCARGA","objeto":"SWITCH NIVEL BAJO TU50001","parte":"Indicador o Sensor"},]
        },
          { "name": "No resp bajo demanda, señal o activación", "value": 4 ,"avisos":[{"fecha":"Viernes 24","descripcion":"FALLA ARRANQUE MOTOR- BOMBA P-5131 D","objeto":"MOTOR ELECTRICO BOMBA P5131D","parte":"Arrancadores de Motor (Contactor)"},{"fecha":"Sábado 11","descripcion":"BOMBA WATERING 10 NO ENCIENDE","objeto":"MOTOR DIESEL WP12010","parte":"Bomba / Filtro"},{"fecha":"Sábado 04","descripcion":"VER. FALLA COMU. TRANSDUC. CO-54020","objeto":"INDICADOR PRES DIF FILTRO TFA-54050","parte":"Cableado y Caja de Conexiones"},{"fecha":"Lunes 20","descripcion":"FALLA DISPLAY AA BODEGA PRUEBAS CALIDAD","objeto":"EDIFICACION ALMACEN PPAL BODEGAS","parte":"Unidad de Conexión"},]
        }
        ],
        "total": 15
      },
      {
        "name": "Obstrucción",
        "children": [
          { "name": "De Sensor", "value": 1,"avisos":[{"fecha":"Jueves 23","descripcion":"FALLA MEDIDOR DE FLUJO BR 41140","objeto":"TRANSMISOR FLUJO SUCCION BR41140","parte":"Indicador o Sensor"},]
        },
          { "name": "Filtro de Succión", "value": 2,"avisos":[{"fecha":"Lunes 13","descripcion":"FALLA BOMBA WILDEN DEL PIT SALA MAQUINAS","objeto":"BOMBA CENTRI #2 DRENAJE AGUAS ACEITOSAS","parte":"Bomba"},{"fecha":"Domingo 26","descripcion":"FALLA BOMBA WILDEN DEL PIT SALA MAQUINAS","objeto":"BOMBA CENTRI #2 DRENAJE AGUAS ACEITOSAS","parte":"Bomba"},]
        },
          { "name": "Lubric., refrig, aire o comb", "value": 3,"avisos":[{"fecha":"Jueves 23","descripcion":"FALLA ARRANQUE BPC 42050","objeto":"","parte":"Energía de Arranque"},{"fecha":"Martes 07","descripcion":"REVISAR BANDAS SKIMER SEPARADOR API","objeto":"MOTOR ELECTRICO SEPARAPI","parte":"Unidad de Control"},{"fecha":"Sábado 11","descripcion":"falla  sist. de refrigeracion BPc 42040","objeto":"MOTOR MPD-42030 BPC-42040 .","parte":"Tubería / Válvulas"},]
        },
          { "name": "Tubería por Agente Interno", "value": 2,"avisos":[{"fecha":"Sábado 25","descripcion":"PERDIDA PRESIÓN/FLUJO LINEA RECIBO ALTOS","objeto":"","parte":"Tubería / Válvulas"},{"fecha":"Jueves 09","descripcion":"HUMEDECIIENTO LINEA SIST. AGUA ESPUMA","objeto":"TUBERIA DISTRIBUCION ESPUMA","parte":"Tubería / Válvulas"},]
        }
        ],
        "total": 8
      },
      {
        "name": "Piezas Mecánicas Sueltas", "value": 5,"avisos":[{"fecha":"Viernes 17","descripcion":"FALLA UNIDAD BPC-42050 PRESION LUBSYSTEM","objeto":"BOMBA CENTRI LUBRICACION","parte":"Impulsor"},{"fecha":"Viernes 03","descripcion":"HUMEDECIMIENTO BOMBA PRELUBRICACION BPC5","objeto":"MOTOR DIESEL BP42050","parte":"Bomba"},{"fecha":"Sábado 18","descripcion":"HUMEDECIMIENTO ACEITE LINEA LUB BPC80","objeto":"MOTOR ELECTRICO BP42080","parte":"Tubería / Válvulas"},{"fecha":"Lunes 13","descripcion":"MTTO EQUIPOS SRE ABRIL PAEZ","objeto":"BOMBA NEUMATICA WILDEN M15","parte":"Cuerpo / Carcasa / Armazón"},{"fecha":"Sábado 11","descripcion":"Falla Valvula paso Drenaje fondo TK-14","objeto":"VALVULA 6-GTV-BA8D1 DE TK-7314","parte":"Vástago"},]
      },
      {
        "name": "Salida por Baja Presión de Descarga", "value": 1,"avisos":[{"fecha":"Viernes 24","descripcion":"FALLA BPC-42050 PRESION DE LUBSYSTEM","objeto":"BOMBA CENTRI LUBRICACION","parte":"Impulsor"},]
      },
      {
        "name": "Señal de control",
        "children": [
          { "name": "Falla de Control", "value": 3,"avisos":[{"fecha":"Miércoles 01","descripcion":"ALTA PD.FILTROS AIRE TURBINA 22070","objeto":"SISTEMA ARRANQUE GD22070","parte":"Indicador o Sensor"},{"fecha":"Domingo 19","descripcion":"FALLA EN PANEL DEL MIDAS DE FASE I","objeto":"RED DISTRIBUCION FASE I BIFUEL GAS","parte":"Tarjeta de entrada"},{"fecha":"Martes 07","descripcion":"BRAZO # 3 DEL 38000 NO DA LAS CORRIDAS","objeto":"VALVULA MOV BOLA DESC MS38030","parte":"Monitoreo (PLC - Tarjetas - sensores)"},]
        },
          { "name": "Parámetro excede lim. superior/inferior", "value": 5,"avisos":[{"fecha":"Viernes 24","descripcion":"FALLA MODULO TERMOCUPLA CILINDRO 2","objeto":"MOTOR DIESEL PPAL BPC-30","parte":"Sensores"},{"fecha":"Viernes 10","descripcion":"ALARMA EN PLAN DE SELLOS BPC 42040","objeto":"BOMBA CENTRIFUGA BP42040","parte":"Sellos"},{"fecha":"Sábado 25","descripcion":"ALARMA PLANDE SELLOS L/A  BPC 42080","objeto":"","parte":"Sellos"},{"fecha":"Sábado 18","descripcion":"ALARMA EN PLAN DE SELLOS L/A BPC80","objeto":"BOMBA CENTRIFUGA BP42080","parte":"Sellos"},{"fecha":"Lunes 13","descripcion":"ALARMA PLAN DE SELLOS L/L BR41120","objeto":"BOMBA CENTRIFUGA BR41120","parte":"Ductos"},]
        },
          { "name": "Errática", "value": 5,"avisos":[{"fecha":"Domingo 19","descripcion":"FALLA PIT-200104 PERDIDA SEÑAL BAHIA #1","objeto":"TRANSMISOR PRES DESC BAHIA 10","parte":"Indicador o Sensor"},{"fecha":"Lunes 27","descripcion":"REVISION ALARMA PARTI ACEITE BPC 42030","objeto":"","parte":"Cableado y Caja de Conexiones"},{"fecha":"Domingo 12","descripcion":"Diferencias medidor de flujo BPC-30 MR","objeto":"TRANSMISOR FLUJO SUCC BPC42030","parte":"Sensores"},{"fecha":"Viernes 17","descripcion":"Falla medidor flujo HOV-298 La alejandri","objeto":"FT-314 INSTR SCADA  LA ALEJANDRIA PK 314","parte":"Interfaz de Comunicación"},{"fecha":"Martes 14","descripcion":"Falla señal PIT-420109 - BPC-42010","objeto":"TRANSMISOR PRES DESC BPC42010","parte":"Sensores"},]
        }
        ],
        "total": 13
      }

    ]
  }
}
