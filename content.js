$("body").append(`
<svg aria-hidden="true" focusable="false">
  <linearGradient id="black" x1="0" x2="0" y1="1" y2="0">
    <stop offset="10%" stop-color="#272c32"/>
    <stop offset="33%" stop-color="#1d2125"/>
    <stop offset="66%" stop-color="#131619"/>
    <stop offset="90%" stop-color="#090b0c"/>
  </linearGradient>
</svg>
<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Karla');
body, .session-authentication {background: #31383f; color: #fff; font-family: 'Karla', sans-serif !important;}
a {color:#fff !important}
.link-gray-dark {color:#fff !important;text-decoration:underline !important;}
.text-gray-dark, .note {color:#fff !important;}
.link-gray {color:#fff !important;}
.user-profile-sticky-bar:after{background:#24292e;border:0px;}
.filter-item.selected { background-color: #24292e !important; }
.filter-item:hover { background-color: #272c32; }
.subnav-item {border:0px}
.subnav-item:hover {background-color:#272c32;}
.muted-link {color:#fff !important}
.muted-link:focus {outline:none !important}
.user-status-message-wrapper > div {color:#fff}
.p-nickname {color:#eee}
.profile-rollup-summarized {border:0px}
.ws-normal {color:#fff !important}
.user-profile-nav {background:#24292e;border:0px}
.btn, .commit-sha, .blankslate code {background:#1d2125 !important;border:0px !important;color:#fff !important;}
.ellipsis-expander {background:transparent !important;border:0px !important;color:#fff !important;}
.social-count {background:#24292e !important;border:0px !important;color:#fff !important;}
.activity-overview-box {border-radius:5px;margin-top:2vh}
.filter-list {background:#31383f}
.Box {background:#24292e;border:0px !important;}
.form-control, .js-suggester-field, .form-select {background:#272c32 !important;color:#fff !important;border:0px !important;}
.topic-tag {background-color:#24292e !important;color:#fff !important;}
.topic-tag:hover {background-color:#272c32 !important;}
.text-gray {color:#fff !important;}
.border, .user-status-container-border, .border-top, .border-top-0, .avatar-before-user-status, .border-gray-dark, .border-bottom {border:0px !important;border-color:transparent !important;}
.bg-white {background:#24292e !important;}
.MarketplaceBackground-buffer, .MarketplaceBody {background:#31383f !important;}
.pinned-item-list-item {background:#24292e;}
.pinned-item-name {background:#24292e !important; color:#fff !important}
.pinned-item-list-item.is-dragging {background:#272c32;}
.octicon > path {fill: #fff !important;}
.discussion-item-icon > svg > path {fill: #24292e !important;}
.profile-timeline-year-list {background:transparent !important;}
.profile-timeline-card {border:0px !important; border-radius:5px !important;border-color:transparent !important;}
.profile-timeline-month-heading {background-color:#24292e !important;padding:8px 6px}
.dropdown-menu {background:#24292e !important;}
.dropdown-menu:after {border-bottom-color:#24292e !important;}
.Popover-message {padding-top:5px;border-color:#24292e !important;}
.dropdown-item {background-color:#24292e !important;color:#fff !important;}
.dropdown-item:hover {background-color:#272c32 !important;}
.bg-gray {background-color:#31383f !important;}
.dashboard-sidebar {background-color:#2d333a !important;}
.avatar {border:0px !important;border-radius:5px !important;background-color:#24292e !important;}
.AvatarStack {background-color:#24292e !important;border: 0px !important;}
.pagehead,.orghead {background:#2d333a !important;border:0px !important;color:#fff !important;padding-bottom:2vh !important;}
.orghead h1 {color:#fff !important;}
.pagehead-tabs-item.selected {background:#31383f !important; color:#fff !important;border:0px;}
.UnderlineNav-item {margin:0px 8px;padding:14px 10px;padding-right:10px;}
.stats-switcher-viewport {background:#24292e !important;border:0px !important;color:#fff !important;border-radius:3px;}
.overall-summary, .repository-lang-stats-graph {border:0px !important;border-radius:0px !important;}
.repository-lang-stats-graph .language-color:not(:first-child) {border:0px !important;}
.num {color:#fff !important;}
.commit-tease, .branch-infobar {background:#24292e !important;color:#fff !important;border:0px !important;}
.js-navigation-item {background-color:#24292e;border:0px !important;}
.file-wrap {border:0px !important;}
table.files tr.navigation-focus td, table.files tr[aria-selected=true] td, .Box-row--focus-gray.navigation-focus {background-color:#272c32 !important;}
table.files td {border:0px !important;}
.Box-header {background:#24292e !important; border:0px !important;border-radius:0px;}
.overflow-hidden {background:transparent !important;}
.Box-body {background:#272c32 !important; border:2px solid #272c32 !important;border-radius:3px !important;}
.markdown-body {background:#272c32 !important;color:#fff !important;border-radius:3px}
.markdown-body pre {background:#31383f !important;color:#fff !important;}
.blob-code-inner,.blob-num, .blob-code-inner span, .final-path, .follow-list-info, .Counter {color:#fff !important;}
::-webkit-scrollbar {width:5px;height:5px;}
::-webkit-scrollbar-track {background:#fff;}
::-webkit-scrollbar-thumb {background:#24292e;}
.tabnav {margin-top:4vh !important;}
.select-menu-modal {background:#24292e !important;color:#fff !important;}
.select-menu-header {background:#090b0c !important;border:0px !important;color:#fff;}
.menu-heading {background:#1d2125 !important;border:0px !important;color:#fff;}
.select-menu-title {color:#fff !important;border:0px !important}
.select-menu-item {background:#24292e !important;color:#fff !important;border:0px !important;}
.select-menu-item:hover {background:#272c32 !important;}
.d-inline-block svg rect {fill: url(#black) #272c32 !important;}
.emoji-picker-emoji-width {background-color:#24292e !important;border-radius:0px !important;}
.blankslate {background:#24292e !important;border:0px !important;}
.btn-link:hover {color:#fff !important; text-decoration:underline !important;}
.protip code {background:#24292e !important;}
.js-selected-navigation-item {background:transparent !important;border:0px !important;}
.select-menu-text-filter {background:#090b0c !important;border:0px !important;}
.flex-auto h4, .text-small span, .text-small {color:#fff !important;}
.ScreenshotCarousel {border:0px !important;}
.ScreenshotCarousel-navitem {border:0px !important;background-color:#24292e !important;}
.ScreenshotCarousel-navitem.selected {border:0px !important;background-color:#090b0c !important;}
.border-gray-light {border:0px !important;background:transparent !important;}
.position-relative > .position-absolute {background:transparent !important;}
.position-relative {background:transparent !important;}
.Story, .topic-box {background-color:#24292e !important;border-radius:5px !important;margin-right:10px;}
.pagination span, .pagination a {background-color:#24292e !important;border:0px !important;}
.pagination .current {background-color:#272c32 !important;border:0px !important;}
.bg-gray-light {background-color:#31383f !important;}
.user-status-container {background:#24292e !important;border-radius:5px;}
.repository-lang-stats-numbers li a {color:#fff !important;}
.lang {color:#fff !important;}
.gh-header {background:transparent !important;border-radius:5px;}
.gh-header-meta, .timeline-comment-wrapper {border:0px !important; color:#fff;}
.timeline-comment-header, .comment-form-head {background:#24292e !important; color: #fff !important;border:0px !important;}
.edit-comment-hide {background-color:#272c32; color:#fff; border:0px;}
.menu {background-color:#24292e; color:#fff; border:0px;}
.menu > .menu-item:hover {background-color:#272c32 !important;}
.menu-item {border:0px !important;}
.timeline-comment {border:0px !important;}
.discussion-timeline-actions {background:transparent;border:0px;}
.AvatarStack-body {background:transparent !important;}
.Subhead {border:0px !important;}
.info {color:#fff !important;}
.boxed-group .heading, .boxed-group > h3 {background:#24292e;border:0px !important;}
.boxed-group-inner {background:#272c32;border:0px !important;}
text {fill:#fff;}
table.capped-list th {background:#24292e;color:#fff;border:0px;}
table.capped-list td {color:#fff;border:0px;}
table.capped-list tr {background:#272c32 !important;color:#fff !important;border:0px !important;}
.top-domains-icon {background:#fff;}
.Box-row {border:0px !important;}
.table-list-header {background:#272c32 !important;border:0px !important;}
.table-list, .table-list-cell {border:0px !important;}
.select-menu-tabs {background:#090b0c !important;padding-top:10px;border:0px !important}
.select-menu-tab-nav {border:0px !important;color:#fff !important;}
.select-menu-tabs .select-menu-tab-nav[aria-selected=true] {background:#24292e  !important;color:#fff !important;}
.project-header {background:#31383f !important;}
.member-suggestion {background:#24292e !important;color:#fff !important;}
.member-suggestion:hover {background:#272c32 !important;}
.saved-reply-form, .tabnav-tab.selected, .drag-and-drop {border:0px !important;color:#fff !important;}
.tabnav-tab.selected {background:#31383f !important;}
.auth-form-header {color:#fff !important;}
.auth-form-body {background-color:#24292e !important;border:0px !important;}
.steps {border:0px !important;}
.steps li {background-color:#272c32 !important;border:0px !important;color:#fff !important;}
.steps li.current {background-color:#24292e !important;}
.plan-choice--experiment {background-color:#272c32 !important;}
.plan-choice--experiment.open {background-color:#24292e !important;}
.bg-blue-light {background-color:#24292e !important;}
.file {border:0px !important;}
.file-header {background-color:#31383f !important;color:#fff !important;border:0px !important;}
.cm-s-github-light, .CodeMirror-lines {background-color:#24292e !important;color:#fff !important;border:0px !important;}
.cm-string {color:#fff !important;}
.CodeMirror-gutters {background-color:#272c32 !important;color:#fff !important;border:0px !important;}
.tabnav-tab {color:#fff !important;}
.commit-form {position:relative;top:-2.5vh;}
.commit-form:after, .commit-form:before {border:none;}
.files tr {background-color:#272c32 !important;color:#fff !important;border:0px !important;}
.js-flash-container {background-color:#272c32 !important;color:#fff !important;border:0px !important;}
.files tr td, .repo-file-upload-target h2, .repo-file-upload-target {color:#fff !important;}
.repo-file-upload-progress, .repo-file-upload-meter, .branch-name {background:#24292e !important;color:#fff !important;border:0px !important;}
.markdown-body img {background:transparent !important;}
.commits-list-item.navigation-focus, .commits-list-item[aria-selected=true] {background:#272c32 !important;}
.full-commit {background:#24292e !important;border:0px !important;color:#fff !important;}
.full-commit span {color:#fff !important;}
.full-commit .commit-meta {background:#272c32 !important;border:0px !important;color:#fff !important;}
.full-commit p.commit-title {color:#fff !important;}
.signed-commit-badge.verified {background:#3FDE64;color:#fff !important; border-color:#3FDE64 !important;}
.commit-group-title .octicon-git-commit {background:#272c32 !important;}
.blob-num-expandable, .blob-num-hunk {background:#24292e !important;}
.blob-code-hunk {background:#272c32 !important;}
.thread-subscription-status {background:#272c32 !important;border:0px !important;}
.block-diff-added {background:#3FDE64 !important;}
.block-diff-deleted {background:#FF3F3C !important;}
.block-diff-neutral {background:#272c32 !important;}
.blob-num-addition {background:#3FDE64 !important;}
.blob-code-addition {background:#6AD783 !important;}
.blob-num-deletion {background:#FF3F3C !important;}
.blob-code-deletion {background:#FF7371 !important;}
.blob-code-deletion .x {background:#FF3F3C !important}
.blob-code-addition .x {background:#3FDE64 !important}
.text-red {color:#FF3F3C !important;}
.text-green {color:#6AD783 !important;}
.diff-table, .data {border:0px !important;border-color:transparent !important;}
.blob-expanded .blob-code, .blob-expanded .blob-num {background:#272c32 !important;border:0px !important;}
.timeline-comment {background:#31383f !important;border:0px !important;}
.timeline-comment-wrapper>.timeline-comment:after, .timeline-comment-wrapper>.timeline-comment:before, .timeline-new-comment .timeline-comment:after, .timeline-new-comment .timeline-comment:before {display:none !important;}
.comment-reactions.has-reactions {border:0px !important;}
.reaction-summary-item {border:0px !important;background:#24292e !important;color: #fff !important;}
.tint-box, .capped-card-content {border:0px !important;background:#24292e !important;color: #fff !important;}
.diffstat-summary {color:#fff !important;}
.diffstat-summary strong, .diffstat-summary span {color:#fff !important;}
.diffstat-summary a {text-decoration:underline;}
.summary-stats li {border:0px !important;}
.summary-stats li a:hover {background:#272c32 !important;}
.discussion-sidebar-item, .discussion-sidebar-heading {color:#fff !important;}
.reason {padding:5px !important;}
.form-select:focus {outline:none !important;box-shadow:none !important;}
.form-control:focus {outline:none !important;box-shadow:none !important;}
.tabnav {border:0px !important;}
.tabnav-tab.selected {background:#272c32 !important; padding:3px 8px !important;}
.network-tree {content:url("https://raw.githubusercontent.com/imfunniee/gitark/master/assets/gitark-link.png");}
.network .current-repository {background:#272c32 !important;padding:3px 8px !important;}
.btn-link, .commit-group-title, .text-gray-light, .gh-header-number {color:#fff !important;}
.signed-commit-header {background:#272c32 !important;border:0px !important;}
.topic-tag-action {background:#24292e !important;border:0px !important;}
.delete-topic-button, .delete-topic-link {background:#272c32 !important;border:0px !important;color:#fff !important;}
.gh-header .gh-header-sticky.is-stuck+.gh-header-shadow {background:#24292e !important;border:0px !important;color:#fff !important;box-shadow:0px 0px 20px rgba(0,0,0,0.1) !important;}
.pl-c{color:#959da5!important}.pl-c1,.pl-s .pl-v{color:#c8e1ff!important}.pl-e,.pl-en{color:#b392f0!important}.pl-s .pl-s1,.pl-smi{color:#f6f8fa!important}.pl-ent{color:#7bcc72!important}.pl-k{color:#ea4a5a!important}.pl-pds,.pl-s,.pl-s .pl-pse .pl-s1,.pl-sr,.pl-sr .pl-cce,.pl-sr .pl-sra,.pl-sr .pl-sre{color:#79b8ff!important}.pl-ml,.pl-v{color:#fb8532!important}.pl-bu{color:#d73a49!important}.pl-ii{color:#fafbfc!important;background-color:#d73a49!important}.pl-c2{color:#fafbfc;background-color:#d73a49!important}.pl-c2::before{content:"^M"!important}.pl-sr .pl-cce{font-weight:700!important;color:#7bcc72!important}.pl-mh,.pl-mh .pl-en,.pl-ms{font-weight:700!important;color:#0366d6!important}.pl-mi{font-style:italic!important;color:#f6f8fa!important}.pl-mb{font-weight:700!important;color:#f6f8fa!important}.pl-md{color:#b31d28!important;background-color:#ffeef0!important}.pl-mi1{color:#176f2c!important;background-color:#f0fff4!important}.pl-mc{color:#b08800!important;background-color:#fffdef!important}.pl-mi2{color:#2f363d!important;background-color:#959da5!important}.pl-mdr{font-weight:700!important;color:#b392f0!important}.pl-mo{color:#0366d6!important}.pl-ba{color:#ffeef0!important}.pl-sg{color:#6a737d!important}.pl-corl{text-decoration:underline!important;color:#79b8ff!important}#readme td{background-color:#272c32!important;border-color:#31383f!important;border-width:.15em!important}#readme td a{font-weight:600!important}#readme .markdown-body.entry-content.p-5 h2{border-color:#31383f;border-width:.09em!important}#readme .markdown-body.entry-content.p-5 h1{border-color:#31383f;border-width:.09em!important}
</style>
`)

$(document).ready(function(){
    if($(".day").length != 0){
    $(".day").each(function() {
        if($(this).attr("fill") == "#ebedf0"){
            $(this).attr("fill","#272c32")
        }
        if($(this).attr("fill") == "#c6e48b"){
            $(this).attr("fill","#1d2125")
        }
        if($(this).attr("fill") == "#7bc96f"){
            $(this).attr("fill","#131619")
        }
        if($(this).attr("fill") == "#239a3b"){
            $(this).attr("fill","#090b0c")
        }
        if($(this).attr("fill") == "#196127"){
            $(this).attr("fill","#000")
        }
    });
    
    $(".legend > li:nth-child(1)").attr("style","background-color:#272c32");
    $(".legend > li:nth-child(2)").attr("style","background-color:#1d2125");
    $(".legend > li:nth-child(3)").attr("style","background-color:#131619");
    $(".legend > li:nth-child(4)").attr("style","background-color:#090b0c");
    $(".legend > li:nth-child(5)").attr("style","background-color:#000");
}
});
