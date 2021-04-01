<p align="center">
    💉Vaccination data provided around the world
</p>

<p align="center">
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />          
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/COVID19-API-brightgreen.svg" alt="">
  <p align="center">
    <a href="https://nodei.co/npm/vaccinations-covid19/"><img src="https://nodei.co/npm/vaccinations-covid19.png"></a>
  </p>
</p>

# Data on COVID-19 (coronavirus) vaccines
*All credits to [owid](https://github.com/owid/covid-19-data), the complete COVID-19 dataset is a collection of the COVID-19 data maintained by Our [World in Data](https://ourworldindata.org/coronavirus).*

## Global vaccination data


**METHOD** vaccinations()

```json
[
  {
    country: 'United States',
    iso_code: 'USA',
    data: [
      {
        date: '2021-03-29',
        total_vaccinations: 145812835,
        people_vaccinated: 95015762,
        people_fully_vaccinated: 52614231,
        daily_vaccinations_raw: 2350144,
        daily_vaccinations: 2757586,
        total_vaccinations_per_hundred: 43.6,
        people_vaccinated_per_hundred: 28.41,
        people_fully_vaccinated_per_hundred: 15.73,
        daily_vaccinations_per_million: 8245
      }
    ]
  }
]
```

**METHOD** vaccinationsByManufacturer()

```json
{
  location: 'Chile',
  data: [
    {
      '0': '',
      location: 'Chile',
      date: '2020-12-24',
      vaccine: 'Pfizer/BioNTech',
      total_vaccinations: '420'
    },
  ]
}
```

**METHOD** locations()

```json
{
  '0': '',
  location: 'Albania',
  iso_code: 'ALB',
  vaccines: 'Pfizer/BioNTech',
  last_observation_date: '2021-03-27',
  source_name: 'Ministry of Health',
  source_website: 'https://coronavirus.al/lajme/covid19-ministria-e-shendetesise-1827-te-vaksinuar-3070-testime-550-te-sheruar-425-raste-te-reja-dhe-12-humbje-jete-ne-24-oret-e-fundit/'
}
```

**METHOD** usaVaccinations()

```json
{
  date: '2021-01-12',
  location: 'Alabama',
  total_vaccinations: '78134.0',
  total_distributed: '377025.0',
  people_vaccinated: '70861.0',
  people_fully_vaccinated_per_hundred: '0.15',
  total_vaccinations_per_hundred: '1.59',
  people_fully_vaccinated: '7270.0',
  people_vaccinated_per_hundred: '1.45',
  distributed_per_hundred: '7.69',
  daily_vaccinations_raw: '',
  daily_vaccinations: '',
  daily_vaccinations_per_million: '',
  share_doses_used: '0.207'
}
```


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © Vaccinations-Covid19 2021 
