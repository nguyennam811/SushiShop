
const products = [
  {
    title: "Otoro Sashimi",
    price: 100000,
    description: "Món Sashimi bụng cá ngừ được coi là tuyệt phẩm trong những món ăn tinh tế nhất xứ hoa anh đào. Nổi tiếng bởi ngoài hương vị vô cùng thơm ngon, số lượng món này lại rất ít.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374671/m%C3%B3n%20%C4%83n/Picture1_yepbaf.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 100
    }
  },
  {
    title: "Sanma",
    price: 55000,
    description: "Sanma là một trong những loài cá nổi tiếng nhất đại diện cho mùa thu trong ẩm thực Nhật Bản. Để thưởng thức chất lượng cơ bản của cá tươi tự nhiên, việc chế biến phổ biến nhất của cá là rắc muối lên và nướng, thì chúng ta sẽ giữ được vị nguyên thủy của món cá tươi. Sanma thường được nướng nguyên con với muối và nướng ngay cả khi ruột còn nguyên vẹn, dùng kèm với củ cải mài và nước tương để tăng cường hương vị của cá.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374670/m%C3%B3n%20%C4%83n/Picture2_vqrrhh.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Negitoro ( Sashimi cá ngừ băm nhuyễn)",
    price: 50000,
    description: "Sashimi cá ngừ băm nhuyễn là một món nhắm rất phổ biến ở các quán Izakaya (quán nhậu kiểu Nhật). Món này thường sử dụng phần nhiều mỡ của cá ngừ nên ăn rất béo và mềm, bên trên thường rắc thêm chút hành trông rất bắt mắt.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374670/m%C3%B3n%20%C4%83n/Picture3_p1sssr.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Sashimi trứng cá hồi",
    price: 75000,
    description: "Nhờ sắc cam nổi bật tượng trưng cho điều may mắn, trứng cá hồi là món ăn không thể thiếu vào những dịp lễ, Tết ở Nhật. Trứng cá hồi rất giòn khi cắn vào, sau đó lại mềm tan cùng với vị mằn mặn, mang lại cảm giác rất thú vị khi ăn.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374669/m%C3%B3n%20%C4%83n/Picture4_pd8fsj.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 10
    }
  },
  {
    title: "Sashimi cá vây chân",
    price: 65000,
    description: "Cá vây chân (Ankō) là một tuyệt phẩm mùa đông ở Nhật. Cá vây chân là loại cá rất đặc biệt vì trừ xương, tất cả bộ phận của cá, từ da, ruột đến cả mang cá đều có thể làm thành những món ăn ngon.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374669/m%C3%B3n%20%C4%83n/Picture5_py0f45.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Engawa Sashimi ( Sashimi vây cá )",
    price: 45000,
    description: "Vây cá thường được sử dụng là vây của cá bơn. Vây cá ăn rất giòn và béo, càng nhai thì vị ngọt của mỡ cá càng lan tỏa khắp khoang miệng, thực sự rất ngon.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374669/m%C3%B3n%20%C4%83n/Picture6_uaol2m.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Aji no Sashimi ( Sashimi cá Sòng )",
    price: 75000,
    description: "BCá sòng là một loại cá rất được người Nhật yêu thích vì vừa rẻ vừa ngon. Thịt cá sòng chắc và béo, rất dễ ăn. Người ta nói rằng vì cá sòng rất ngon nên mới có tên là Aji (鯵) – đồng âm với chữ “hương vị” (味, cũng đọc là Aji) trong tiếng Nhật.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374670/m%C3%B3n%20%C4%83n/Picture7_yzfziz.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Tachiuo no Sashimi ( Sashimi cá hố )",
    price: 100000,
    description: "Chỉ những con cá hố thật tươi và to (khoảng 4 ngón tay chụm lại) thì mới được làm thành Sashimi. Sashimi cá hố tươi rất chắc thịt, có vị ngọt nhẹ và hơi béo. Nhờ sắc bạc đặc trưng, cá hố còn được người dân vùng Yamaguchi sáng tạo thành món Kagamimori (鏡盛り, tạm dịch: “Sashimi gương”) bằng cách xếp những lát cá hố sống trên một dĩa hình tròn để tạo thành một chiếc gương lấp lánh.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374668/m%C3%B3n%20%C4%83n/Picture8_llk5zm.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Fugu Sashimi ( Sashimi cá nóc )",
    price: 120000,
    description: "Cá nóc là một món ăn xa xỉ ở Nhật. Do trong cá nóc có độc tố nên để được phép chế biến, người đầu bếp ngoài việc phải có bằng cấp chuyên môn dành riêng cho việc chế biến cá nóc, còn phải trải qua quá trình tu nghiệp thực tế khắt khe. Sashimi cá nóc có vị rất nhẹ nhàng, thường được ăn kèm xốt giấm Ponzu.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374668/m%C3%B3n%20%C4%83n/Picture9_boyi4j.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 100
    }
  },
  {
    title: "Sashimi Tôm rồng",
    price: 450000,
    description: "Tôm rồng Iseebi – vua của các loài tôm, là một món ăn cao cấp và thường xuất hiện trên các bàn tiệc ở Nhật. Cùng với vẻ ngoài mạnh mẽ như một chiến binh, tôm rồng có thịt chắc và ngọt đậm đà, là một món ngon mà chắc chắn sẽ thỏa mãn vị giác của bất kỳ ai.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374668/m%C3%B3n%20%C4%83n/Picture10_jggpst.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Sashimi cá Kampachi",
    price: 150000,
    description: "Kampachi là một loài cá cùng họ với cá cam. Tuy có hơi ít mỡ hơn cá cam một chút nhưng bù lại cá Kampachi chắc thịt hơn và hầu như không có mùi tanh nên rất dễ ăn.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374667/m%C3%B3n%20%C4%83n/Picture11_hyufha.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Sashimi Ốc Sazae ",
    price: 75000,
    description: "Ốc Sazae là một loại ốc xoắn to khoảng 10cm. Vào mùa xuân, mùa mà ốc Sazae ngon nhất, người Nhật thường cắt lát ốc Sazae để làm thành Sashimi. Sashimi ốc Sazae ăn dai dai và đậm đà mùi biển.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374667/m%C3%B3n%20%C4%83n/Picture12_ecjyos.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 10
    }
  },
  {
    title: "Sashimi Mực",
    price: 85000,
    description: "Sashimi mực là một trong những loại Sashimi phổ biến nhất. Tùy theo độ dày của lát cắt mà sẽ mang đến trải nghiệm vị giác khác nhau. Hãy thử Sashimi mực cắt lát dày vì bạn có thể thưởng thức đồng thời độ giòn và độ dẻo của mực.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374667/m%C3%B3n%20%C4%83n/Picture13_hn3xvr.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Sashimi Bào ngư",
    price: 215000,
    description: "Có nhiều loại bào ngư, trong đó, bào ngư đen là loại được dùng để làm Sashimi phổ biến nhất. Sashimi bào ngư là món ăn thượng hạng, thường chỉ được phục vụ ở những nhà hàng Nhật cao cấp hoặc những Ryokan (lữ quán truyền thống của Nhật Bản).",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374667/m%C3%B3n%20%C4%83n/Picture14_trc6gn.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Temarizushi",
    price: 275000,
    description: "Temari-sushi là một biến thể của Nigiri có hình tròn nhỏ thay vì hình trụ thông thường. Những miếng cơm tròn đầy màu sắc của sushi kết hợp với màu sắc tương phản của sashimi hoặc rau nấu chín trên cơm trông giống như đồ trang trí vậy.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374667/m%C3%B3n%20%C4%83n/Picture15_zicc8a.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Ozisushi - Sushi ép",
    price: 400000,
    description: "Ozisushi là loại sushi được ép trong khuôn gỗ rồi dùng dao cắt thành từng miếng vừa ăn. Loại sushi này thường có 2 lớp cơm kẹp lấy 1 lớp nhân ở giữa.",
    image: "https://res.cloudinary.com/djyngxvh5/image/upload/v1681374666/m%C3%B3n%20%C4%83n/Picture16_y7qgxr.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Onigiri",
    price: 100000,
    description: "Onigiri là một nét ẩm thực không thể thiếu trong đời sống hằng ngày của người dân xứ hoa anh đào. Những nắm cơm hình tam giác hay tròn chắc nịch được yêu thích bởi sự tiện lợi nhỏ gọn, giá thành rẻ và được bày bán phổ biến ở các cửa hàng tiện lợi, siêu thị lớn nhỏ trên khắp nước Nhật.",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374471/post/Onigiri_vi3k78.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 100
    }
  },
  {
    title: "Cá Hồi",
    price: 60000,
    description: "Cá hồi là một trong những giá trị cốt lõi tạo nên sức hút không thể thiếu của iSushi. Nhờ hương vị thơm ngon, béo ngậy cùng dồi dào các tinh chất bổ dưỡng như Omega 3, DHA, protein…",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374467/post/c%C3%A1_h%E1%BB%93i_k2h0hb.jpg",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Inarizushi",
    price: 50000,
    description: "Inarizushi là món sushi dùng đậu phụ aburaage chiên giòn, bên trong chứa cơm sushi trộn với vừng, mè.. ",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374465/post/Inarizushi_hufgpo.jpg",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Makizushi",
    price: 80000,
    description: "Makizushi là một loại sushi truyền thống của Nhật Bản, còn được gọi là Futomaki. Được làm bằng cơm sushi (cơm trộn giấm), và các nguyên liệu như thanh cua, cá hồi, trứng, dưa leo, cá ngừ… cuộn trong lá rong biển khô.",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374465/post/Makizushi_bcbzr0.jpg",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 10
    }
  },
  {
    title: "Hosomaki",
    price: 100000,
    description: "Hosomaki cũng giống như Makizushi, nhưng cuộn nhỏ hơn và phần nhân thường chỉ gồm cơm sushi và một nguyên liệu khác như cá hồi, thanh cua, dưa leo.",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374465/post/Hosomaki_is0zx9.jpg",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Tekkamaki",
    price: 95000,
    description: "Tekkamaki là một loại Hosomaki chứa đầy cá ngừ, đôi khi có trộn cả hành lá.",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374465/post/Temaki_sushi_rtxgt8.jpg",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Ehōmaki",
    price: 100000,
    description: "Ehōmaki là một loại cuộn sushi dài với 7 thành phần. Thành phần gồm cơm sushi và nhân là thanh cua, cá ngừ, cá hồi, trứng, lươn.. ",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374465/post/Eh%C5%8Dmaki_mgghpo.jpg",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Temaki sushi",
    price: 90000,
    description: "Temaki là một loại sushi được cuốn thành hình chiếc nón, với phần nhân sushi vượt ra ngoài rong biển trông rất đẹp mắt.",
    image: "https://res.cloudinary.com/dkqbxhd4f/image/upload/v1681374467/post/Tekkamaki_b77plv.jpg",
    category: "china",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Rong nho",
    price: 15000,
    description: "Vì có hình dáng như một chùm nho tí hon, loại tảo biển này thường được người ta gọi với cái tên rong nho. Ngoài ra, chúng còn được gọi với một cái tên khác là “trứng cá muối xanh” bởi chúng chứa rất nhiều chất dinh dưỡng, đồng thời chúng được tìm thấy ở Nhật Bản, vùng Đông Nam Á hay các đảo ở khu vực Thái Bình Dương. Rong nho còn có tên khoa học của rong nho là Caulerpa lentillifera",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372656/m%C3%B3n%20%C4%83n/1_q21uli.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 100
    }
  },
  {
    title: "Đậu",
    price: 20000,
    description: "Lượng sắt trong đỗ xanh nhiều gấp 2 lần so với rau chân vịt. Sắt cần thiết để cơ thể vận chuyển ôxy từ phổi tới các tế bào trong cơ thể.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372657/m%C3%B3n%20%C4%83n/3_jnyn1h.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Súp miso",
    price: 15000,
    description: "Súp miso hay còn gọi là canh tương, đây là món ăn truyền thống của Nhật Bản. Với nguyên liệu đơn giản bao gồm phần nước dùng (dashi) nấu cùng tương miso cùng một số loại nguyên liệu khác như đậu phụ, rong biển. Đây là một trong những món ăn thường dùng làm bữa ăn sáng của người Nhật.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372661/m%C3%B3n%20%C4%83n/5_zjuoyo.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Gà sốt teriyaki",
    price: 45000,
    description: "Gà nướng sốt teriyaki có hương thơm nhè nhẹ của nước tương Nhật và tỏi. Cùng vị ngon của sốt Teriyaki ngấm đều trên từng thớ thịt mang lại sự đậm đà, thơm ngon hoàn hảo khiến người ăn nhớ mãi.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372952/m%C3%B3n%20%C4%83n/18_sgfgnq.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 10
    }
  },
  {
    title: "Cá hồi sốt teriyaki",
    price: 83000,
    description: "Cá hồi nướng sốt teriyaki là một món ăn đơn giản, không cần tẩm ướp lâu và có hương vị siêu ngon. Cá hồi tươi ngon mọng nước hòa quyện cùng sốt teriyaki tự làm.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372954/m%C3%B3n%20%C4%83n/21_pt2ecl.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Trứng cuộn kiểu Nhật",
    price: 35000,
    description: "Món trứng cuộn Tamagoyaki của Nhật Bản, được làm bằng cách cuộn trứng thành nhiều lớp và thường được làm trong một chiếc chảo chiên hình chữ nhật, có tên là Makiyakinabe.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372955/m%C3%B3n%20%C4%83n/34_lz4f2r.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }

  },
  {
    title: "Trứng hấp",
    price: 19000,
    description: "Trứng hấp sốt thái mềm thơm, vị béo của trứng hòa quyện với sốt chua cay mặn ngọt vô cùng kích thích vị giác.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372950/m%C3%B3n%20%C4%83n/132_iro6hh.png",
    category: "vietnam",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Mực sốt teriyaky",
    price: 69000,
    description: "Sốt Teriyaki là sốt dành cho những món nướng của Nhật Bản, những món ăn được phết lớp sốt này sau khi nướng sẽ có màu sắc hấp dẫn và hương vị đậm đà.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372959/m%C3%B3n%20%C4%83n/134_sd7tea.png",
    category: "china",
    rating: {
      rate: 5,
      count: 200
    }
  },
  {
    title: "Cơm sushi",
    price: 10000,
    description: " là một món ăn Nhật Bản gồm cơm trộn giấm (shari) kết hợp với các nguyên liệu khác (neta). Neta và hình thức trình bày sushi rất đa dạng, nhưng nguyên liệu chính mà tất cả các loại sushi đều có là shari. Neta phổ biến nhất là hải sản. Thịt sống cắt lát gọi riêng là sashimi.",
    image: "https://res.cloudinary.com/dfvevjtzy/image/upload/v1681372956/m%C3%B3n%20%C4%83n/203_m1r6aa.png",
    category: "china",
    rating: {
      rate: 5,
      count: 200
    }
  }
]
module.exports = products;