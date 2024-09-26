import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Signup from "./Components/Authentication/Signup/Signup";
import PrivateRoute from "./Components/Authentication/PrivateRoute/PrivateRoute";
import ForgotPassword from "./Components/Authentication/ForgotPassword/ForgotPassword";
import UserProfile from "./Components/Pages/UserProfile/UserProfile";
import Dashboard from "./Components/Dashboard/Dashboard";
import MakeAdminPage from "./Components/Pages/MakeAdminPage/MakeAdminPage";
import RouterChangeTop from "./Components/Shared/RouterChangeTop/RouterChangeTop";
import AddProductPage from "./Components/Pages/AddProductPage/AddProductPage";
import ProductsContext from "./Components/AllContextApi/ProductsContext";
import SingleProductPage from "./Components/Pages/SingleProductPage/SingleProductPage";
import CartContext from "./Components/AllContextApi/CartContext";
import OrderReviewPage from "./Components/Pages/OrderReviewPage/OrderReviewPage";
import Checkoutpage from "./Components/Pages/CheckoutPage/Checkoutpage";
import PopularItemsPage from "./Components/Home/HomeSections/PopularItems/PopularItemsPage";
import BrandsPage from "./Components/Home/HomeSections/Brands/BrandsPage";
import CampaignData from "./Components/Home/HomeSections/Campaigns/CampaignsData";
import FlashSalePage from "./Components/Home/HomeSections/FlashSale/FlashSalePage";
import PaymentSuccess from "./Components/Pages/Payment/PaymentSuccess";
import NotFound from "./Components/Pages/NotFoundPage/NotFound";
import Invoice from "./Components/Pages/ReportGeneratePages/Invoice";
import OrderContextAdmin from "./Components/AllContextApi/OrderContextAdmin";
// import SearchProvider from "./Components/AllContextApi/SearchContext";
import SearchProductDisplay from "./Components/Pages/DisplayProductsPages/SearchProductDisplay";
// category Display Pages
import ApparelProductsDisplay from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/ApparelProductsDisplay";
import FashionAccessoriesDisplay from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/FashionAccessoriesDisplay";
import ElectronicDevicesAndAccessoriesDisplay from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/ElectronicDevicesAndAccessoriesDisplay";
import Beauty from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/BeautyAndPersonalCareDisplay";
import GiftCraft from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/GiftAndCraftsDisplay";
import OfficeEducation from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/OfficeEducationDisplay";
import HomeAndLifestyle from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/HomeAndLifestyleDisplay";
import HomeAppliance from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/HomeAppliancesDisplay";
import Sports from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/SportsAndEntertainmentDisplay";
import Groceries from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/GroceriesAndHomeEssentialsDisplay";
import Automobile from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/AutomobileAndMotorBikeDisplay";
import Health from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/HealthAndMedicalAccessoriesDisplay";
import Matrimonial from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/MatrimonialDisplay";
import Kids from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/KidsSegmentDisplay";
import Trip from "./Components/Pages/DisplayProductsPages/DisplayProductCategories/TourAndTipsDisplay";

// Footer Pages
import Payment from "./Components/Home/FooterPages/HELP/Payment";
import Shipping from "./Components/Home/FooterPages/HELP/Shipping";
import Cancellation from "./Components/Home/FooterPages/HELP/Cancellation";
import FAQ from "./Components/Home/FooterPages/HELP/FAQ";
import HowToBuy from "./Components/Home/FooterPages/HELP/HowToBuy";
import PrivacyPolicy from "./Components/Home/FooterPages/POLICY/PrivacyPolicy";
import ReturnPolicy from "./Components/Home/FooterPages/POLICY/ReturnPolicy";
import TermsAndConditions from "./Components/Home/FooterPages/POLICY/TermsAndConditions";
import MerchantPolicy from "./Components/Home/FooterPages/POLICY/MerchantPolicy";
import AboutUs from "./Components/Home/FooterPages/ABOUT/AboutUs";
import ContactUs from "./Components/Home/FooterPages/ABOUT/ContactUs";
import Careers from "./Components/Home/FooterPages/ABOUT/Careers";
import ShortLinks from "./Components/Home/FooterPages/ABOUT/ShortLinks";
import OurPartners from "./Components/Home/FooterPages/ABOUT/OurPartners";
// Dynamic
import DisplayProduct from "./Components/Pages/DisplayProductsPages/DisplayProduct";
import CashPaymentSuccess from "./Components/Pages/Payment/CashPaymentSuccess";
import DisplaySubChildCategoryProducts from "./Components/Pages/DisplayProductsPages/DisplaySubChildCategoryProducts";
import WishlistContext from "./Components/AllContextApi/WishlistContext";
import WishlistProductPage from "./Components/Pages/WishlistProductPage/WishlistProductPage";
// Merchant Route
import MerchantFrontPage from "./Components/MerchantZone/MerchantFrontPage";
import MerchantDashboard from "./Components/MerchantZone/Dashboard/MerchantDashboard";
import MerchantAddProduct from "./Components/MerchantZone/Dashboard/Merchant-Add-Product/MerchantAddProduct";
import MerchantsProduct from "./Components/Pages/MerchantDetails/MerchantsProduct";
import DisplaySubCategories from "./Components/Pages/DisplayProductsPages/DisplaySubCategories";
import ElectronicMainCategory from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/ElectronicMainCategory";
import ApparelMainCategory from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/ApparelMainCategory";
import FashionAccessoriesMainCategory from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/FashionAccessoriesMainCategory";
import BeautiPersonalMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/BeautiPersonalMainCategories";
import GiftCraftMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/GiftCraftMainCategories";
import OfficeEducationMainCategoris from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/OfficeEducationMainCategoris";
import HomeAndLifeMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/HomeAndLifeMainCategories";
import HomeApplianceMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/HomeApplianceMainCategories";
import SportsMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/SportsMainCategories";
import GroceriesMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/GroceriesMainCategories";
import AutoMobileMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/AutoMobileMainCategories";
import HealthMedicalMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/HealthMedicalMainCategories";
import MatrimonialMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/MatrimonialMainCategories";
import KidsMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/KidsMainCategories";
import TourTipsMainCategories from "./Components/Pages/DisplayProductsPages/DisplayMainProductCategories/TourTipsMainCategories";
import Add from "./Components/Home/Add/Add";

function App() {
  return (
    <div>
      <WishlistContext>
        <ProductsContext>
          <CartContext>
            <OrderContextAdmin>
              <Router>
                {/* this is for top page location when route change */}
                <RouterChangeTop />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>

                  <Route path="/home">
                    <Home />
                  </Route>

                  <Route path="/add">
                    <Add />
                  </Route>

                  <Route path="/singleProduct/:ProductId">
                    <SingleProductPage />
                  </Route>
                  <PrivateRoute path="/orderReview">
                    <OrderReviewPage />
                  </PrivateRoute>

                  <PrivateRoute path="/checkout">
                    <Checkoutpage />
                  </PrivateRoute>

                  <Route path="/login">
                    <Login />
                  </Route>

                  <Route path="/signup">
                    <Signup />
                  </Route>

                  <Route path="/forgotPassword">
                    <ForgotPassword />
                  </Route>

                  <PrivateRoute path="/userProfile">
                    <UserProfile />
                  </PrivateRoute>

                  <PrivateRoute path="/dashboard">
                    <Dashboard />
                  </PrivateRoute>

                  <PrivateRoute path="/makeAdminPage">
                    <MakeAdminPage />
                  </PrivateRoute>

                  <PrivateRoute path="/addProductPage">
                    <AddProductPage />
                  </PrivateRoute>

                  <PrivateRoute path="/success/:valId">
                    <PaymentSuccess />
                  </PrivateRoute>

                  <PrivateRoute path="/cashPaymentSuccess">
                    <CashPaymentSuccess />
                  </PrivateRoute>

                  {/* Routing for category wise Product Display Pages main cetegori (Mid Row) */}
                  <Route path="/category/ElectronicDevicesAndAccessories">
                    <ElectronicMainCategory />
                  </Route>
                  <Route path="/category/apparel">
                    <ApparelMainCategory />
                  </Route>
                  <Route path="/category/FashionAccessories">
                    <FashionAccessoriesMainCategory />
                  </Route>
                  <Route path="/category/beauty-and-personal-care">
                    <BeautiPersonalMainCategories />
                  </Route>
                  <Route path="/category/gift-craft">
                    <GiftCraftMainCategories />
                  </Route>
                  <Route path="/category/office-and-education">
                    <OfficeEducationMainCategoris />
                  </Route>
                  <Route path="/category/home-and-lifestyle">
                    <HomeAndLifeMainCategories />
                  </Route>
                  <Route path="/category/home-appliance">
                    <HomeApplianceMainCategories />
                  </Route>
                  <Route path="/category/sports-and-entertainment">
                    <SportsMainCategories />
                  </Route>
                  <Route path="/category/groceries-and-home-essentials">
                    <GroceriesMainCategories />
                  </Route>
                  <Route path="/category/automobile-items">
                    <AutoMobileMainCategories />
                  </Route>
                  <Route path="/category/health-and-medical">
                    <HealthMedicalMainCategories />
                  </Route>
                  <Route path="/category/matrimonial">
                    <MatrimonialMainCategories />
                  </Route>
                  <Route path="/category/kids-zone">
                    <KidsMainCategories />
                  </Route>
                  <Route path="/category/trip-and-tours">
                    <TourTipsMainCategories />
                  </Route>

                  {/* home main body cetegory */}
                  <Route path="/ElectronicDevicesAndAccessoriesItem/:itemName">
                    <ElectronicDevicesAndAccessoriesDisplay />
                  </Route>

                  <Route path="/ApparelsItem/:itemName">
                    <ApparelProductsDisplay />
                  </Route>

                  <Route path="/FashionAccessoriesItem/:itemName">
                    <FashionAccessoriesDisplay />
                  </Route>

                  <Route path="/BeautyItem/:itemName">
                    <Beauty />
                  </Route>

                  <Route path="/GiftCraftItem/:itemName">
                    <GiftCraft />
                  </Route>

                  <Route path="/OfficeEducationItem/:itemName">
                    <OfficeEducation />
                  </Route>

                  <Route path="/HomeAndLifestyleItem/:itemName">
                    <HomeAndLifestyle />
                  </Route>

                  <Route path="/HomeApplianceItem/:itemName">
                    <HomeAppliance />
                  </Route>

                  <Route path="/SportsItem/:itemName">
                    <Sports />
                  </Route>

                  <Route path="/GroceriesItem/:itemName">
                    <Groceries />
                  </Route>

                  <Route path="/AutomobileItem/:itemName">
                    <Automobile />
                  </Route>

                  <Route path="/HealthItem/:itemName">
                    <Health />
                  </Route>

                  <Route path="/MatrimonialItem/:itemName">
                    <Matrimonial />
                  </Route>

                  <Route path="/KidsItem/:itemName">
                    <Kids />
                  </Route>

                  <Route path="/TripItem/:itemName">
                    <Trip />
                  </Route>

                  {/* Routing for Product Display Pages */}
                  <Route path="/Search/:searchProductName">
                    <SearchProductDisplay />
                  </Route>
                  <Route path="/popular">
                    <PopularItemsPage />
                  </Route>
                  <Route path="/flash-sale">
                    <FlashSalePage />
                  </Route>
                  <Route path="/brands">
                    <BrandsPage />
                  </Route>

                  <Route path="/campaigns">
                    <CampaignData />
                  </Route>

                  {/* Routing For Footer Pages */}
                  <Route path="/payment-note">
                    <Payment />
                  </Route>
                  <Route path="/shipping-note">
                    <Shipping />
                  </Route>
                  <Route path="/cancellation-note">
                    <Cancellation />
                  </Route>
                  <Route path="/faq">
                    <FAQ />
                  </Route>
                  <Route path="/how-to-buy">
                    <HowToBuy />
                  </Route>
                  <Route path="/privacy-policies">
                    <PrivacyPolicy />
                  </Route>
                  <Route path="/return-policies">
                    <ReturnPolicy />
                  </Route>

                  <Route path="/t-and-c">
                    <TermsAndConditions />
                  </Route>
                  <Route path="/about-us">
                    <AboutUs />
                  </Route>
                  <Route path="/contact-us">
                    <ContactUs />
                  </Route>
                  <Route path="/career">
                    <Careers />
                  </Route>
                  <Route path="/short-links">
                    <ShortLinks />
                  </Route>
                  <Route path="/our-partners">
                    <OurPartners />
                  </Route>

                  {/* ************** Merchant Zone */}
                  <Route path="/merchant">
                    <MerchantFrontPage />
                  </Route>
                  <Route path="/merchant-policies">
                    <MerchantPolicy />
                  </Route>
                  <PrivateRoute path="/merchant-dashboard">
                    <MerchantDashboard />
                  </PrivateRoute>
                  <Route path="/merchant-add-product">
                    <MerchantAddProduct />
                  </Route>
                  <Route path="/merchants-product/:merchantEmail">
                    <MerchantsProduct />
                  </Route>

                  {/* Merchant Zone ************** */}

                  <Route path="/displaySubCategories/:childCatvalue">
                    <DisplaySubCategories />
                  </Route>

                  <Route path="/displayProduct/:childCatvalue">
                    <DisplayProduct />
                  </Route>
                  <Route path="/displaySubChildProduct/:childCatvalue">
                    <DisplaySubChildCategoryProducts />
                  </Route>

                  <Route path="/wishlists">
                    <WishlistProductPage />
                  </Route>

                  {/* Routing For Report Generate Pages */}
                  <PrivateRoute path="/invoice/:invoiceId">
                    <Invoice />
                  </PrivateRoute>
                  {/* Routing For Not found page */}
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Router>
            </OrderContextAdmin>
          </CartContext>
        </ProductsContext>
      </WishlistContext>
    </div>
  );
}

export default App;
