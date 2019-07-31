<template>
  <div id="layout">
    <div class="top">
      <nav-top></nav-top>
    </div>
    <div class="container-main">
      <div class="side">我是左侧菜单栏</div>
      <div class="main bg-f3">
        <router-view/>
      </div>
    </div>

    <img v-if="false" alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld v-if="false" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import dashboardMain from "@/components/dashboardMain";
import navTop from "@/components/navTop";
import { constants } from "fs";

export default {
  name: "home",
  components: {
    HelloWorld,
    navTop,
    dashboardMain
  },
  data: function() {
    return {
      approvalKey:{
        code:'approveTypeCode',
        name:'approveTypeName',
        count:'pendingTaskCount',
        icon:'iconInfo'
      },
      todoKey:{
        code:'messageTypeCode',
        name:'messageTypeName',
        count:'messageTypeNoticeCount',
        form:'informationForm',
        icon:'iconInfo'
      },
      todoList: {
        title:'待办事项',
        list: [
          {
            messageTypeCode: "14",
            messageTypeName: "需方企业资质申请待提交",
            messageTypeNoticeCount: 0,
            informationForm: "/crm/ei/demanderApplyQuery?pageCode=crmEi0001",
            iconInfo: "&#xe8ac;"
          },
          {
            messageTypeCode: "16",
            messageTypeName: "需方企业资质申请已驳回",
            messageTypeNoticeCount: 0,
            informationForm: "/crm/ei/demanderApplyQuery?pageCode=crmEi0001",
            iconInfo: "&#xe8ac;"
          },
          {
            messageTypeCode: "20",
            messageTypeName: "需求已分配待处理",
            messageTypeNoticeCount: 2,
            informationForm: "/psd/sd/psdDemandQuery?pageCode=psdSd0001",
            iconInfo: "&#xe8a7;"
          },
          {
            messageTypeCode: "21",
            messageTypeName: "派发待处理",
            messageTypeNoticeCount: 0,
            informationForm: "/psd/ss/psdSolutionQuery?pageCode=psdSs0001",
            iconInfo: "&#xe8a7;"
          },
          {
            messageTypeCode: "22",
            messageTypeName: "派发已驳回",
            messageTypeNoticeCount: 0,
            informationForm: "/psd/sd/psdReSolution?pageCode=psdSd0003",
            iconInfo: "&#xe8a7;"
          },
          {
            messageTypeCode: "23",
            messageTypeName: "供方已提交方案（商城）",
            messageTypeNoticeCount: 0,
            informationForm: "/psd/ss/psdSolutionQuery?pageCode=psdSs0001",
            iconInfo: "&#xe62a;"
          },
          {
            messageTypeCode: "24",
            messageTypeName: "待需方方案确认",
            messageTypeNoticeCount: 0,
            informationForm: "/psd/ss/psdSolutionQuery?pageCode=psdSs0001",
            iconInfo: "&#xe62a;"
          },
          {
            messageTypeCode: "25",
            messageTypeName: "需求待导入商品清单",
            messageTypeNoticeCount: 0,
            informationForm: "/psd/ss/psdSolutionQuery?pageCode=psdSs0001",
            iconInfo: "&#xe62a;"
          },
          {
            messageTypeCode: "26",
            messageTypeName: "需求待生成销售订单",
            messageTypeNoticeCount: 2,
            informationForm: "/psd/ss/psdWaitGenContract?pageCode=psdSs0002",
            iconInfo: "&#xe62a;"
          },
          {
            messageTypeCode: "27",
            messageTypeName: "待需方确认订单",
            messageTypeNoticeCount: 0,
            informationForm: "/som/sc/somSalesContractQuery?pageCode=somSc0003",
            iconInfo: "&#xe62a;"
          },
          {
            messageTypeCode: "28",
            messageTypeName: "需方订单待签约",
            messageTypeNoticeCount: 0,
            informationForm: "/som/sc/somSalesContractQuery?pageCode=somSc0003",
            iconInfo: "&#xe62a;"
          },
          {
            messageTypeCode: "32",
            messageTypeName: "采购订单待接单",
            messageTypeNoticeCount: 0,
            informationForm:
              "/pom/pc/pomPurchaseContractQuery?pageCode=pomPc0001",
            iconInfo: "&#xe62a;"
          },
          {
            messageTypeCode: "35",
            messageTypeName: "商品待提交",
            messageTypeNoticeCount: 21,
            informationForm: "/cmc/ci/cmcItemQuery?pageCode=cmcCi0002",
            iconInfo: "&#xe8a6;"
          },
          {
            messageTypeCode: "37",
            messageTypeName: "商品待上架",
            messageTypeNoticeCount: 1,
            informationForm: "/cmc/ci/cmcSaleApplyQuery?pageCode=cmcCi0003",
            iconInfo: "&#xe8a6;"
          },
          {
            messageTypeCode: "4",
            messageTypeName: "供方企业资质申请待提交",
            messageTypeNoticeCount: 0,
            informationForm: "/crm/ei/supplierApplyQuery?pageCode=crmEi0003",
            iconInfo: "&#xe8ac;"
          },
          {
            messageTypeCode: "6",
            messageTypeName: "供方企业资质申请已驳回",
            messageTypeNoticeCount: 0,
            informationForm: "/crm/ei/supplierApplyQuery?pageCode=crmEi0003",
            iconInfo: "&#xe8ac;"
          },
          {
            messageTypeCode: "7",
            messageTypeName: "考察申请待提交",
            messageTypeNoticeCount: 1,
            informationForm: "/crm/es/crmInspectPlanList?pageCode=crmEs0001",
            iconInfo: "&#xe8ac;"
          },
          {
            messageTypeCode: "8",
            messageTypeName: "考察报告待提交",
            messageTypeNoticeCount: 0,
            informationForm: "/crm/fs/crminspectManageQuery?pageCode=crmfs0001",
            iconInfo: "&#xe8ac;"
          }
        ]
      },
      approvalData: {
        title:'审批事项',
        list: [
          {
            approveTypeCode: "CRM_SUPPLIER_INSPECT_APPRAISE_AUDIT",
            approveTypeName: "供方考察评估报告",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CRM_SUPPLIER_INSPECT_PLAN_AUDIT",
            approveTypeName: "需考察供方考察计划",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "POM_PA_PURCHASE_PAYMENT_APPLY_AUDIT",
            approveTypeName: "采购付款单申请",
            iconInfo: "&#xe62a;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "POM_PC_PURCHASE_CONTRACT_AUDIT",
            approveTypeName: "采购订单",
            iconInfo: "&#xe62a;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CRM_CUSTOMER_CROSS_REPORT_AUDIT",
            approveTypeName: "需方跨区域报备审批",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "SOM_SP_COUPON_AUDIT",
            approveTypeName: "Coupon单",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "SOM_SS_SALES_SETTLEMENT_AUDIT",
            approveTypeName: "结算单",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CRM_SUPPLIER_CROSS_REPORT_AUDIT",
            approveTypeName: "供方跨区域报备审批",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CRM_SUPPLIER_EXEMPT_INSPECT_PLAN_AUDIT",
            approveTypeName: "免考察供方考察申请",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "SOM_SN_DELIVERY_AUDIT",
            approveTypeName: "发运通知",
            iconInfo: "&#xe8a6;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "SOM_SC_SALES_CONTRACT_AUDIT",
            approveTypeName: "销售合同",
            iconInfo: "&#xe8a8;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "POM_PS_PURCHASE_SETTLEMENT_AUDIT",
            approveTypeName: "采购发票",
            iconInfo: "&#xe62a;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "POM_PF_AGREEMENT_AUDIT",
            approveTypeName: "采购协议",
            iconInfo: "&#xe62a;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "SOM_SF_AGREEMENT_AUDIT",
            approveTypeName: "销售协议",
            iconInfo: "&#xe62a;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "TMS_TR_RETURN_APPLY_AUDIT",
            approveTypeName: "退货单",
            iconInfo: "&#xe62a;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CMC_CI_ITEM_MODIFY_APPLY_AUDIT",
            approveTypeName: "商品变更申请",
            iconInfo: "&#xe8a6;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "PSD_SS_SOLUTION_AUDIT",
            approveTypeName: "派发信息",
            iconInfo: "&#xe8a7;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "ARM_IV_INVOICE_AUDIT",
            approveTypeName: "开票申请",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "ARM_RP_REFUND_APPLY_AUDIT",
            approveTypeName: "退款申请",
            iconInfo: "&#xe8ac;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CMC_TJ_TIEM_PRICE_ALTER_AUDIT",
            approveTypeName: "商品调价申请",
            iconInfo: "&#xe8a6;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CMC_CI_ITEM_AUDIT",
            approveTypeName: "商品信息",
            iconInfo: "&#xe89d;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CMC_CP_TIEM_PRICE_AUDIT",
            approveTypeName: "商品定价",
            iconInfo: "&#xe89d;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CMC_CI_ITEM_SALE_APPLY_AUDIT",
            approveTypeName: "商品上架申请",
            iconInfo: "&#xe89d;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CMC_CI_ITEM_UNSALE_APPLY_AUDIT",
            approveTypeName: "商品下架申请",
            iconInfo: "&#xe89d;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "TMS_TD_DELIVERY_AUDIT",
            approveTypeName: "发货单",
            iconInfo: "&#xe8a7;",
            pendingTaskCount: 0
          },
          {
            approveTypeCode: "CMC_ZF_TIEM_INVALID_AUDIT",
            approveTypeName: "商品作废申请",
            iconInfo: "&#xe8a6;",
            pendingTaskCount: 0
          }
        ]
      }
    };
  },
  created() {

  }
};
</script>
<style lang="scss" scoped>
#layout .top {
  height: 36px;
  text-align: center;
  line-height: 36px;
  background-color: #fbfbfb;
}
#layout .container-main {
  display: flex;
  background-color: #fff;
  .side {
    width: 160px;
    background-color: #000;
    min-height: 800px;
    color: #fff;
  }
  .main {
    flex: 1;
  }
}
</style>

